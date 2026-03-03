import { Button } from '@/components/ui/Button';

type ResumeButtonProps = {
  resumeUrl: string;
  className?: string;
};

export const ResumeButton = ({ resumeUrl, className }: ResumeButtonProps) => (
  <Button
    href={resumeUrl}
    target="_blank"
    rel="noreferrer"
    className={className}
    aria-label="Open resume PDF in a new tab"
  >
    Resume
  </Button>
);
