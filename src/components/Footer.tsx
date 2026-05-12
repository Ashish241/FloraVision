import { logoIcon } from "@/assets";
import { footerNavigation } from "@/config/navigation.config";

const Footer = () => (
  <footer id="contact" className="grid w-full scroll-mt-28 grid-cols-1 gap-20 p-5 sm:grid-cols-2 md:p-10 lg:grid-cols-3">
    <div className="flex flex-col gap-10">
      <div className="flex cursor-pointer items-end gap-2 text-3xl font-black text-white/75">
        <img src={logoIcon} alt="plant" className="drop-shadow-logo size-14" />
        <p>FloraVision.</p>
      </div>
      <p className="font-medium">
        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and
        elevate your living environment."
      </p>
      <div className="mt-10 flex gap-8 font-extrabold">
        <h4>FB</h4>
        <h4>TW</h4>
        <h4>LI</h4>
      </div>
    </div>
    <div className="flex flex-col items-start gap-8 sm:items-center sm:gap-10">
      <h2 className="text-2xl font-extrabold">Quick Link’s</h2>
      <ul className="grid w-full grid-cols-2 gap-x-8 gap-y-3 sm:w-auto sm:grid-cols-1 sm:gap-y-2">
        {footerNavigation.map(({ name, href }, i) => (
          <li key={i}>
            <a href={href} className="text-start underline underline-offset-4">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="grid gap-30 sm:col-span-2 md:col-span-1 md:translate-x-2/3 lg:translate-0">
      <div className="grid gap-5">
        <h2 className="text-2xl font-extrabold">For Every Update.</h2>
        <form className="grid grid-cols-3 rounded-md border border-white p-px">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="col-span-2 p-1 px-4 placeholder:font-medium placeholder:text-white/75"
          />
          <button className="rounded bg-white p-1 px-4 text-center text-black">Subscribe</button>
        </form>
      </div>
      <h6 className="font-medium">FloraVision © all right reserve</h6>
    </div>
  </footer>
);

export default Footer;
