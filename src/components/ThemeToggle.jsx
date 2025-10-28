import React  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button"; 


export default function ThemeToggle() {


    const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  return (
     <Button
      variant="outline"
      size="icon"
      onClick={() => dispatch(toggleTheme())}
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-yellow-300" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </Button>
  )
}
