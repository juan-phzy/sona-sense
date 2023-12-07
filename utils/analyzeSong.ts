interface AnalysisResult {
  bpm: string;
  key: string;
}

export default async function analyzeSong(
  songPath: string
): Promise<AnalysisResult> {
  const lambdaUrl = process.env.NEXT_PUBLIC_LAMBDA_URL;

  if (!lambdaUrl) {
    throw new Error("Lambda URL is not defined");
  }

  const urlWithQueryParam = `${lambdaUrl}?song_path=${encodeURIComponent(
    songPath
  )}`;

  const response = await fetch(urlWithQueryParam, { method: "GET" });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data: AnalysisResult = await response.json();
  return data;
}
