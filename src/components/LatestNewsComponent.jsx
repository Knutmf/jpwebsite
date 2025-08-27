import { useEffect, useState } from "react";

export default function LatestNewsComponent() {
  const [latestVideo, setLatestVideo] = useState(null);
  const latestInstagramPostUrl = "https://www.instagram.com/p/CqXYZabc123/";

  const API_KEY = "YOUR_API_KEY"; // replace with your YouTube Data API key
  const CHANNEL_ID = "YOUR_CHANNEL_ID"; // replace with your channel ID
  const MAX_RESULTS = 1; // Only the latest video

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        const videoItem = data.items.find((item) => item.id.kind === "youtube#video");
        setLatestVideo(videoItem);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <section className="latest-news-section">
      <h2 className="latest-news-heading">Latest News</h2>

      <div className="latest-news-grid">
        {/* YouTube Video */}
        <div className="news-card">
          <h3>Latest YouTube Video</h3>
          {latestVideo ? (
            <>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${latestVideo.id.videoId}`}
                  title={latestVideo.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4>{latestVideo.snippet.title}</h4>
              <p>{latestVideo.snippet.description}</p>
            </>
          ) : (
            <p>Loading latest video...</p>
          )}
        </div>

        {/* Instagram Post */}
        <div className="news-card">
          <h3>Latest Instagram Post</h3>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={latestInstagramPostUrl}
            data-instgrm-version="14"
          >
            <a href={latestInstagramPostUrl} target="_blank" rel="noreferrer noopener">
              View on Instagram
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
}