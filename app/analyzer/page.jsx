"use client";

import React, { useState } from "react";
import analyzeSong from "@/utils/analyzeSong";

const SongAnalysis = () => {
  const [songPath, setSongPath] = useState("song-all of me-lpur9r27");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSongAnalysis = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await analyzeSong(songPath);
      setAnalysisResult(result);
    } catch (error) {
      console.error("Error fetching song analysis:", error);
      setError("Failed to fetch song analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <input
        type="text"
        value={songPath}
        onChange={(e) => setSongPath(e.target.value)}
        placeholder="Enter song path"
        className="px-3 py-2 text-black border rounded shadow-sm focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={fetchSongAnalysis}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {loading ? "Loading..." : "Analyze Song"}
      </button>

      {analysisResult && (
        <div className="mt-4 p-3 border rounded shadow-sm">
          <p className="text-lg">BPM: {analysisResult.bpm}</p>
          <p className="text-lg">Key: {analysisResult.key}</p>
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default SongAnalysis;
