
function NauticalHeroIllustration() {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-sm">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 72% 35%, #fff6df 0%, #f7dfb3 30%, #dfc39d 65%, #a6b2ba 100%)',
        }}
      />

      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="A sailing ship crossing the sea at sunset, with old navigation instruments in the foreground"
      >
        <defs>
          <linearGradient id="heroSea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#566d7e" />
            <stop offset="100%" stopColor="#1d2c38" />
          </linearGradient>
          <linearGradient id="heroWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8e623e" />
            <stop offset="100%" stopColor="#482c18" />
          </linearGradient>
          <radialGradient id="heroSun">
            <stop offset="0%" stopColor="#fffdf5" stopOpacity=".95" />
            <stop offset="55%" stopColor="#f8d799" stopOpacity=".5" />
            <stop offset="100%" stopColor="#e4ba7e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Luz y cielo */}
        <rect width="800" height="500" fill="url(#heroSun)" />
        <g fill="#f8e8ce" opacity=".45">
          <ellipse cx="420" cy="120" rx="130" ry="38" />
          <ellipse cx="520" cy="145" rx="150" ry="42" />
          <ellipse cx="690" cy="110" rx="120" ry="35" />
        </g>

        {/* Costa y mar */}
        <path
          d="M590 295 Q645 250 705 245 Q755 240 800 220 L800 305 L590 305Z"
          fill="#696f75"
          opacity=".65"
        />
        <rect x="0" y="295" width="800" height="125" fill="url(#heroSea)" />
        <ellipse cx="595" cy="315" rx="75" ry="12" fill="#fbe2b0" opacity=".4" />
        <path
          d="M120 355 Q210 346 310 355 T510 355 T740 355"
          stroke="#c8d7e0"
          strokeWidth="2"
          opacity=".3"
          fill="none"
        />

        {/* Galeón */}
        <g transform="translate(275 45)">
          <path
            d="M78 242 L248 236 L262 215 L278 214 L268 258 Q185 274 96 266Z"
            fill="#2b231f"
          />
          <path
            d="M84 248 L266 241 L265 249 L88 255Z"
            fill="#c79a5b"
          />
          <line x1="125" y1="68" x2="125" y2="242" stroke="#2d231d" strokeWidth="3" />
          <line x1="182" y1="42" x2="182" y2="240" stroke="#2d231d" strokeWidth="4" />
          <line x1="234" y1="64" x2="234" y2="238" stroke="#2d231d" strokeWidth="3" />

          {/* Velas */}
          <g stroke="#9b7e5c" strokeWidth="1">
            <path d="M98 86 Q125 82 150 86 L148 124 Q122 120 96 124Z" fill="#efe0c9" />
            <path d="M92 132 Q125 127 156 132 L154 180 Q124 174 90 180Z" fill="#e8d5b9" />
            <path d="M154 62 Q182 57 210 62 L208 102 Q182 98 152 102Z" fill="#f5e8d3" />
            <path d="M146 110 Q182 104 218 110 L216 162 Q182 155 144 162Z" fill="#efe0c9" />
            <path d="M142 170 Q182 164 222 170 L220 218 Q182 211 140 218Z" fill="#e5cfaf" />
            <path d="M210 82 Q234 78 258 82 L256 120 Q234 116 208 120Z" fill="#f5e8d3" />
            <path d="M204 128 Q234 123 264 128 L262 178 Q234 172 202 178Z" fill="#ecdbc0" />
            <path d="M236 74 L318 196 L256 184Z" fill="#f6ead6" />
          </g>

          <path d="M182 42 L198 46 L182 50Z" fill="#b5493a" />
          <path d="M234 64 L248 67 L234 70Z" fill="#b5493a" />
          <line x1="258" y1="226" x2="328" y2="196" stroke="#2b231f" strokeWidth="3" />
        </g>

        {/* Mesa de navegación */}
        <rect x="210" y="388" width="590" height="22" fill="url(#heroWood)" />
        <rect x="190" y="408" width="610" height="92" fill="#5a3820" />
        <line x1="210" y1="388" x2="800" y2="388" stroke="#b6875b" strokeWidth="2" />

        {/* Mapa */}
        <path
          d="M365 445 L515 415 L735 432 L695 495 L385 495Z"
          fill="#efe2cc"
          stroke="#b59b74"
          strokeWidth="2"
        />
        <path
          d="M440 452 Q520 436 595 454 T685 462"
          stroke="#8c7352"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Catalejo */}
        <g transform="translate(275 435) rotate(-13)">
          <rect x="0" y="4" width="65" height="16" rx="2" fill="#c99a54" />
          <rect x="62" y="2" width="75" height="20" rx="2" fill="#4a2e1b" stroke="#c99a54" />
          <rect x="135" y="0" width="88" height="24" rx="2" fill="#b88743" />
        </g>

        {/* Brújula */}
        <g transform="translate(615 432)">
          <ellipse cx="0" cy="14" rx="54" ry="26" fill="#7d5826" stroke="#e5c07b" strokeWidth="2" />
          <ellipse cx="0" cy="10" rx="50" ry="23" fill="#f4ead7" stroke="#b38644" strokeWidth="2" />
          <line x1="0" y1="-10" x2="0" y2="30" stroke="#24323f" />
          <line x1="-44" y1="10" x2="44" y2="10" stroke="#24323f" />
          <path d="M0 -5 L7 10 L0 25 L-7 10Z" fill="#a85d52" />
          <circle cx="0" cy="10" r="3" fill="#b38644" />
        </g>

        {/* Libros */}
        <g transform="translate(705 315)">
          <rect x="0" y="88" width="95" height="24" rx="3" fill="#3b2518" stroke="#9c7344" />
          <rect x="6" y="92" width="85" height="16" fill="#e8dcc6" />
          <rect x="6" y="64" width="90" height="24" rx="3" fill="#4e3120" stroke="#b58952" />
          <rect x="2" y="42" width="94" height="22" rx="3" fill="#2e1e16" stroke="#9c7344" />
          <rect x="8" y="46" width="84" height="14" fill="#dfd1b8" />
          <rect x="10" y="20" width="86" height="22" rx="3" fill="#5b3924" stroke="#c99a5b" />
        </g>
      </svg>

      {/* Transición suave hacia el fondo marfil */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40"
        style={{
          background:
            'linear-gradient(90deg, #f7f5ef 0%, rgba(247,245,239,.75) 35%, transparent 100%)',
        }}
      />
    </div>
  )
}

export default NauticalHeroIllustration
