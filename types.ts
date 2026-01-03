
export type MediaType = 'reel' | 'story' | 'post' | 'private' | 'unknown';

export interface DownloadResult {
  type: MediaType;
  thumbnail: string;
  title: string;
  url: string;
  id: string;
}

export interface AdProps {
  label: string;
  className?: string;
}
