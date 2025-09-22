/*import { useEffect, useState } from "react";*/

export default function LatestNewsComponent() {
/* const [latestVideo, setLatestVideo] = useState(null);
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
*/
  return (
    <section className="latest-news-section">
      <h2 className="latest-news-heading">Latest News</h2>

      <div className="latest-news-grid">
        {/* YouTube Video */}
        <div className="news-card">
        <h3>Latest YouTube Video</h3>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0RyA1-njlmk"
            title="Latest YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>



        {/* Instagram Post */}
        <div className="news-card">
        <h3>Latest Instagram Post</h3>
        <div className="instagram-wrapper">
          <iframe
            src="https://www.instagram.com/reel/C29G_pzsDLd/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Latest Instagram Post"
          ></iframe>
        </div>
      </div>
</div>
    </section>
  );
}