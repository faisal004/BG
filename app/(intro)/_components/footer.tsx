const Footer = () => {
    return ( <div className="h-8 flex items-center border-t-2 text-sm px-3  gap-2 ">
        <p className="text-balance flex gap-2 text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://faisal-husain.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            faisal
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/faisal004/ui"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        
    </div> );
}
 
export default Footer;