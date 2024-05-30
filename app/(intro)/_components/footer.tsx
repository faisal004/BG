const Footer = () => {
    return ( <div className="h-8 mt-10 relative flex items-center  text-sm px-3  gap-1 max-w-[1300px] mx-auto ">
      <div className="absolute items-center top-0 left-0 h-[1px] z-20 w-full animate-border-width rounded-full bg-gradient-to-r dark:from-white from-black dark:to-slate-50 to-slate-800  transition-all duration-10000"/>

    
        <p className="text-balance flex gap-2 text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://faisal-husain.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            @faisal.
          </a>
        </p>
        
    </div> );
}
 
export default Footer;