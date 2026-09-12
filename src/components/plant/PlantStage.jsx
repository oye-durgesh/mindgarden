const STAGE_ORDER = ['seed', 'sprout', 'two-leaf', 'sapling', 'two-weeks', 'bud', 'almost', 'blooming', 'lotus']

export default function PlantStage({ stage = 'seed', className = '' }) {
  const resolved = STAGE_ORDER.includes(stage) ? stage : 'seed'

  return (
    <svg viewBox="0 0 200 220" className={className} aria-hidden>
      <ellipse cx="100" cy="198" rx="52" ry="10" fill="rgba(0,0,0,0.18)" />
      <path d="M58 168h84l-8 32H66z" fill="#6d4c41" />
      <path d="M62 168h76v8H62z" fill="#8d6e63" />
      {resolved === 'seed' && (
        <>
          <ellipse cx="100" cy="154" rx="14" ry="9" fill="#8d6e63" />
          <ellipse cx="96" cy="152" rx="5" ry="3" fill="#d7ccc8" opacity="0.7" />
        </>
      )}
      {resolved !== 'seed' && <rect x="97" y="120" width="6" height="48" rx="3" fill="#4caf7a" />}
      {(resolved === 'sprout' || resolved === 'two-leaf') && (
        <>
          <ellipse cx="86" cy="128" rx="16" ry="8" fill="#7fd67f" transform="rotate(-20 86 128)" />
          {resolved === 'two-leaf' && (
            <ellipse cx="116" cy="124" rx="16" ry="8" fill="#67c267" transform="rotate(22 116 124)" />
          )}
        </>
      )}
      {(resolved === 'sapling' || resolved === 'two-weeks') && (
        <>
          <ellipse cx="78" cy="132" rx="20" ry="9" fill="#7fd67f" transform="rotate(-28 78 132)" />
          <ellipse cx="124" cy="126" rx="20" ry="9" fill="#67c267" transform="rotate(26 124 126)" />
          <ellipse cx="100" cy="108" rx="14" ry="18" fill="#4caf7a" />
        </>
      )}
      {resolved === 'two-weeks' && <ellipse cx="100" cy="96" rx="18" ry="16" fill="#3d9a68" />}
      {(resolved === 'bud' || resolved === 'almost') && (
        <>
          <ellipse cx="74" cy="136" rx="22" ry="10" fill="#7fd67f" transform="rotate(-30 74 136)" />
          <ellipse cx="128" cy="128" rx="22" ry="10" fill="#67c267" transform="rotate(28 128 128)" />
          <ellipse cx="100" cy="100" rx="20" ry="28" fill="#3d9a68" />
          <circle cx="100" cy="78" r={resolved === 'almost' ? 12 : 8} fill="#c4b5fd" />
        </>
      )}
      {(resolved === 'blooming' || resolved === 'lotus') && (
        <>
          <ellipse cx="70" cy="140" rx="24" ry="11" fill="#7fd67f" transform="rotate(-32 70 140)" />
          <ellipse cx="132" cy="132" rx="24" ry="11" fill="#67c267" transform="rotate(30 132 132)" />
          <ellipse cx="100" cy="104" rx="22" ry="30" fill="#3d9a68" />
          <ellipse cx="100" cy="72" rx="18" ry="22" fill="#ddd6fe" />
          <ellipse cx="82" cy="80" rx="12" ry="20" fill="#c4b5fd" transform="rotate(-28 82 80)" />
          <ellipse cx="118" cy="80" rx="12" ry="20" fill="#c4b5fd" transform="rotate(28 118 80)" />
          <circle cx="100" cy="78" r="7" fill="#f5a962" />
        </>
      )}
      {resolved === 'lotus' && <text x="100" y="48" textAnchor="middle" fontSize="28">🪷</text>}
    </svg>
  )
}
