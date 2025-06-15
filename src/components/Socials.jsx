function SocialLink({ icon, color, hidden }) {
  return (
    <a
      href="#"
      className={`size-10 flex items-center justify-center rounded-full ${color} ${hidden && 'hidden md:flex'}`}>
      <img src={`/icons/${icon}`} alt="social icon" className="size-4.5" />
    </a>
  );
}

export default function Socials({ color, children, hidden }) {
  return (
    <div className="flex gap-4">
      <SocialLink color={color} hidden={hidden} icon="ri_twitter-fill.svg" />
      <SocialLink color={color} hidden={hidden} icon="ri_instagram-line.svg" />
      <SocialLink color={color} hidden={hidden} icon="ri_facebook-circle-fill.svg" />
      {children}
    </div>
  );
}
