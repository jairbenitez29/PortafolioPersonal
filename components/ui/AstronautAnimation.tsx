'use client';

import { motion } from 'framer-motion';

export default function AstronautAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-md lg:max-w-lg relative"
    >
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Estrellas de fondo */}
        <motion.circle
          cx="100"
          cy="100"
          r="2"
          fill="#8B5CF6"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="500"
          cy="150"
          r="2"
          fill="#8B5CF6"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="150"
          cy="400"
          r="2"
          fill="#8B5CF6"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />

        {/* Laptop fija a la derecha */}
        <g transform="translate(450, 300)">
          <rect x="0" y="0" width="120" height="80" rx="5" fill="#374151" />
          <rect x="10" y="10" width="100" height="60" fill="#60A5FA" opacity="0.8" />
          <rect x="15" y="15" width="90" height="50" fill="#1E40AF" />

          {/* Código en pantalla */}
          <line x1="20" y1="25" x2="70" y2="25" stroke="#8B5CF6" strokeWidth="1.5" />
          <line x1="20" y1="32" x2="60" y2="32" stroke="#60A5FA" strokeWidth="1.5" />
          <line x1="20" y1="39" x2="80" y2="39" stroke="#8B5CF6" strokeWidth="1.5" />
          <line x1="20" y1="46" x2="55" y2="46" stroke="#60A5FA" strokeWidth="1.5" />
          <line x1="20" y1="53" x2="75" y2="53" stroke="#8B5CF6" strokeWidth="1.5" />

          {/* Base de laptop */}
          <rect x="0" y="80" width="120" height="5" rx="2" fill="#1F2937" />
        </g>

        {/* Astronauta caminando */}
        <motion.g
          animate={{
            x: [0, 200, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <g transform="translate(100, 250)">
            {/* Casco */}
            <circle cx="50" cy="0" r="35" fill="#1F2937" />
            <circle cx="50" cy="0" r="28" fill="#4B5563" />
            <ellipse cx="42" cy="-8" rx="10" ry="12" fill="#60A5FA" opacity="0.4" />

            {/* Traje espacial */}
            <rect x="20" y="30" width="60" height="70" rx="10" fill="#E5E7EB" />
            <rect x="25" y="35" width="50" height="60" rx="8" fill="#8B5CF6" />

            {/* Detalles del traje */}
            <circle cx="50" cy="55" r="6" fill="#60A5FA" />
            <rect x="30" y="70" width="40" height="2" fill="#60A5FA" />
            <rect x="30" y="80" width="40" height="2" fill="#60A5FA" />

            {/* Mochila */}
            <rect x="35" y="35" width="30" height="40" rx="5" fill="#6B7280" />
            <circle cx="42" cy="50" r="3" fill="#EF4444" />
            <circle cx="58" cy="50" r="3" fill="#EF4444" />

            {/* Brazo izquierdo - oscila al caminar */}
            <motion.g
              animate={{ rotate: [-20, 20, -20] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '23px 45px' }}
            >
              <rect x="13" y="45" width="18" height="50" rx="9" fill="#8B5CF6" />
              <circle cx="22" cy="95" r="8" fill="#E5E7EB" />
            </motion.g>

            {/* Brazo derecho - oscila al caminar (opuesto) */}
            <motion.g
              animate={{ rotate: [20, -20, 20] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '77px 45px' }}
            >
              <rect x="69" y="45" width="18" height="50" rx="9" fill="#8B5CF6" />
              <circle cx="78" cy="95" r="8" fill="#E5E7EB" />
            </motion.g>

            {/* Pierna izquierda - camina */}
            <motion.g
              animate={{ rotate: [20, -20, 20] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '35px 100px' }}
            >
              <rect x="28" y="100" width="18" height="50" rx="9" fill="#8B5CF6" />
              <ellipse cx="37" cy="155" rx="12" ry="8" fill="#1F2937" />
            </motion.g>

            {/* Pierna derecha - camina (opuesta) */}
            <motion.g
              animate={{ rotate: [-20, 20, -20] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '55px 100px' }}
            >
              <rect x="54" y="100" width="18" height="50" rx="9" fill="#8B5CF6" />
              <ellipse cx="63" cy="155" rx="12" ry="8" fill="#1F2937" />
            </motion.g>
          </g>
        </motion.g>

        {/* Texto motivacional flotante */}
        <motion.text
          x="300"
          y="450"
          fill="#8B5CF6"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Buscando el próximo proyecto...
        </motion.text>
      </svg>
    </motion.div>
  );
}
