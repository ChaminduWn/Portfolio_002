import sharp from "sharp";

const icon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brand" x1="70" y1="40" x2="450" y2="470" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6D8CFF"/>
      <stop offset="1" stop-color="#28D7B0"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#brand)"/>
  <path d="M373 337c-29 31-67 47-113 47-83 0-145-55-145-128s62-128 145-128c46 0 84 16 113 47l-46 44c-17-18-38-27-63-27-43 0-74 27-74 64s31 64 74 64c25 0 46-9 63-27l46 44z" fill="white"/>
</svg>`;

await sharp(Buffer.from(icon)).png().toFile("app/icon.png");
