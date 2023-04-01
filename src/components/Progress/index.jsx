import { ProgressContext } from "../../contexts/contexts";
import { useContext } from "react";

export const Progress = () => {
  const { progress } = useContext(ProgressContext)

  const maxProgress = 100;
  const minProgress = 0;
  let progressValue = progress;

  if (progressValue >= maxProgress) {
    progressValue = maxProgress;
  }

  if (progressValue < minProgress) {
    progressValue = minProgress;
  }

  return (
    <>
    
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: `${progressValue}%`}}>
        {
        progressValue > minProgress && `${progressValue}%`
        }
        
        </div>
    </div>
    </>
  )
}
