import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className = "" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary bg-background/80 backdrop-blur-sm rounded-lg transition-all hover:bg-background ${className}`}
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
};

export default BackButton;
