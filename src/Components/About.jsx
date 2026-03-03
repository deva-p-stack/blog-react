import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Page"; 
  }, []);

  return (
    <div className="w-full min-h-[80.5vh] bg-green-500">
      <h3>About Page Content</h3>
    </div>
  );
}