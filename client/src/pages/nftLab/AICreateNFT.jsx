import "./AICreateNFT.css";
import { Helmet } from "react-helmet-async";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AICreateNFT = ({ Data }) => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const generatePreview = () => {
    if (!prompt) return;
    // Enter generating state and intentionally never clear it so the UI shows loading indefinitely.
    setGenerating(true);
    setImageUrl(null);
  };

  const downloadImage = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "softgalaxy-ai-nft.png";
    a.click();
  };

  return (
    <>
      <Helmet>
        <title>SoftGalaxy | AI Create NFT</title>
        <meta name="description" content="Create NFT with AI by inputting sentences" />
      </Helmet>

      <section id="aiCreate" className="aiCreateSection py-5">
        <div className="container">
          <div className="row pageTitle mb-4">
            <div className="col-12">
              <span className="d-block F1 textS1">
                <span className="lemon">AI</span> Create
              </span>
              <span className="d-block F3 textS2">Describe your idea and generate an NFT preview</span>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <label className="d-block mb-2">Write a descriptive prompt</label>
              <textarea
                className="w-100 promptInput"
                rows={8}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A colorful neon fox astronaut floating in a pastel galaxy"
              />

              <div className="mt-3 d-flex gap-2">
                <button className="generateBtn d-flex align-items-center" onClick={generatePreview} disabled={generating || !prompt}>
                  {generating && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                  {generating ? "Generating..." : "Generate Preview"}
                </button>
                <button className="downloadBtn" onClick={downloadImage} disabled={!imageUrl}>
                  Download PNG
                </button>
              </div>

              <div className="mt-4">
                <small className="text-muted">This client-side preview demonstrates the idea locally. For production use, connect to an AI image generation API.</small>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
              <div className="previewCard p-3 w-100 h-100 d-flex flex-column align-items-center">
                {generating && !imageUrl ? (
                  <div className="skeletonPreview w-100 h-100 rounded" />
                ) : imageUrl ? (
                  <img src={imageUrl} alt="AI preview" className="img-fluid previewImg" />
                ) : (
                  <div className="emptyPreview">Your preview will appear here</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AICreateNFT;
