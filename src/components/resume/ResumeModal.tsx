import { Button } from '@/components/ui/Button';

type ResumeModalProps = {
  isOpen: boolean;
  resumeUrl: string;
  onClose: () => void;
};

export const ResumeModal = ({ isOpen, resumeUrl, onClose }: ResumeModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 p-4" role="dialog" aria-modal="true">
      <div className="surface-card w-full max-w-2xl p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Resume Preview</h2>
          <Button variant="ghost" onClick={onClose} aria-label="Close resume modal">
            Close
          </Button>
        </div>
        <iframe title="Resume preview" src={resumeUrl} className="h-[70vh] w-full rounded border border-border" />
      </div>
    </div>
  );
};
