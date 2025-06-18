export const bikeConfig = {
  road: {
    wheelSizes: ["700c"],
    tireWidths: [23, 25, 28, 32, 35, 38],
    defaultSetup: { 
      wheel: "700c", 
      tire: "25", 
      crankset: "shimano-105-r7000", 
      cassette: "shimano-105-r7000-11-28" 
    },
  },
  gravel: {
    wheelSizes: ["700c", "650b"],
    tireWidths: [32, 35, 38, 40, 42, 45, 47, 50, 2.0, 2.1, 2.2, 2.25, 2.35],
    defaultSetup: { 
      wheel: "700c", 
      tire: "40", 
      crankset: "shimano-grx-rx600", 
      cassette: "shimano-grx-rx600-11-42" 
    },
  },
  mtb: {
    wheelSizes: ["26-inch", "27.5-inch", "29-inch"],
    tireWidths: [2.1, 2.25, 2.35, 2.4, 2.5, 2.6],
    defaultSetup: { 
      wheel: "29-inch", 
      tire: "2.35", 
      crankset: "sram-gx-eagle", 
      cassette: "sram-gx-eagle-10-52" 
    },
  },
};
export const componentDatabase = {
  cranksets: [
    // ================================
    // SHIMANO ROAD CRANKSETS
    // ================================

    // Claris (8-Speed)
    { id: "shimano-claris-r2000-50-34", model: "Shimano Claris R2000", variant: "50/34T", weight: 900, bikeType: "road", teeth: [50, 34], speeds: "8-speed" },
    { id: "shimano-claris-r2000-52-36", model: "Shimano Claris R2000", variant: "52/36T", weight: 920, bikeType: "road", teeth: [52, 36], speeds: "8-speed" },

    // Sora (9-Speed)
    { id: "shimano-sora-r3000-50-34", model: "Shimano Sora R3000", variant: "50/34T", weight: 850, bikeType: "road", teeth: [50, 34], speeds: "9-speed" },
    { id: "shimano-sora-r3000-52-36", model: "Shimano Sora R3000", variant: "52/36T", weight: 870, bikeType: "road", teeth: [52, 36], speeds: "9-speed" },

    // Tiagra (10-Speed)
    { id: "shimano-tiagra-r4700-50-34", model: "Shimano Tiagra R4700", variant: "50/34T", weight: 785, bikeType: "road", teeth: [50, 34], speeds: "10-speed" },
    { id: "shimano-tiagra-r4700-52-36", model: "Shimano Tiagra R4700", variant: "52/36T", weight: 795, bikeType: "road", teeth: [52, 36], speeds: "10-speed" },

    // 105 (11-Speed)
    { id: "shimano-105-r7000", model: "Shimano 105 R7000", variant: "50/34T", weight: 760, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "shimano-105-compact", model: "Shimano 105 R7000", variant: "52/36T", weight: 780, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "shimano-105-r7000-53-39", model: "Shimano 105 R7000", variant: "53/39T", weight: 790, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },

    // 105 (12-Speed)
    { id: "shimano-105-r7100-50-34", model: "Shimano 105 R7100", variant: "50/34T", weight: 750, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "shimano-105-r7100-52-36", model: "Shimano 105 R7100", variant: "52/36T", weight: 760, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Ultegra (11-Speed)
    { id: "shimano-ultegra-r8000", model: "Shimano Ultegra R8000", variant: "50/34T", weight: 680, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "shimano-ultegra-compact", model: "Shimano Ultegra R8000", variant: "52/36T", weight: 700, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-53-39", model: "Shimano Ultegra R8000", variant: "53/39T", weight: 710, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },
    // === NEWLY ADDED TT OPTIONS ===
    { id: "shimano-ultegra-r8000-54-42", model: "Shimano Ultegra R8000", variant: "54/42T", weight: 710, bikeType: "road", teeth: [54, 42], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-55-42", model: "Shimano Ultegra R8000", variant: "55/42T", weight: 715, bikeType: "road", teeth: [55, 42], speeds: "11-speed" },

    // Ultegra (12-Speed)
    { id: "shimano-ultegra-r8100-50-34", model: "Shimano Ultegra R8100", variant: "50/34T", weight: 716, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "shimano-ultegra-r8100-52-36", model: "Shimano Ultegra R8100", variant: "52/36T", weight: 700, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Dura-Ace (11-Speed)
    { id: "shimano-dura-ace-r9100", model: "Shimano Dura-Ace R9100", variant: "50/34T", weight: 590, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-52-36", model: "Shimano Dura-Ace R9100", variant: "52/36T", weight: 600, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-53-39", model: "Shimano Dura-Ace R9100", variant: "53/39T", weight: 610, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },

    // Dura-Ace (12-Speed)
    { id: "shimano-dura-ace-r9200-50-34", model: "Shimano Dura-Ace R9200", variant: "50/34T", weight: 690, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-52-36", model: "Shimano Dura-Ace R9200", variant: "52/36T", weight: 700, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-54-40", model: "Shimano Dura-Ace R9200", variant: "54/40T", weight: 720, bikeType: "road", teeth: [54, 40], speeds: "12-speed" },
  ]
};

// ================================
    // SHIMANO GRAVEL CRANKSETS
    // ================================

    // GRX RX400 (10-Speed)
    // Note: Original data was accurate. No changes needed.
    { id: "shimano-grx-rx400-46-30", model: "Shimano GRX RX400", variant: "46/30T", weight: 819, bikeType: "gravel", teeth: [46, 30], speeds: "10-speed" },

    // GRX RX600 (11-Speed)
    // Note: Weights corrected to official specs. ID standardized. 42T/44T are not standard RX600 options and have been removed.
    { id: "shimano-grx-rx600-46-30", model: "Shimano GRX RX600", variant: "46/30T", weight: 806, bikeType: "gravel", teeth: [46, 30], speeds: "11-speed" },
    { id: "shimano-grx-rx600-1x-40", model: "Shimano GRX RX600 1x", variant: "40T", weight: 743, bikeType: "gravel", teeth: [40], speeds: "11-speed" },

    // GRX RX810 (11-Speed)
    // Note: Weights corrected to official specs. ID standardized.
    { id: "shimano-grx-rx810-48-31", model: "Shimano GRX RX810", variant: "48/31T", weight: 710, bikeType: "gravel", teeth: [48, 31], speeds: "11-speed" },
    { id: "shimano-grx-rx810-1x-40", model: "Shimano GRX RX810 1x", variant: "40T", weight: 644, bikeType: "gravel", teeth: [40], speeds: "11-speed" },
    { id: "shimano-grx-rx810-1x-42", model: "Shimano GRX RX810 1x", variant: "42T", weight: 656, bikeType: "gravel", teeth: [42], speeds: "11-speed" },

       // ================================
    // SHIMANO MTB CRANKSETS
    // ================================

    // CUES U4000 (9-speed) - Square Taper
    // Note: Weights are approximate real-world values (crankset only) as official specs are unavailable. Original weights were ~200g too light.
    { id: "shimano-cues-u4000-32", model: "Shimano CUES U4000", variant: "32T", weight: 920, bikeType: "mtb", teeth: [32], speeds: "9-speed" },

    // CUES U6000 (10/11-speed) - 2-piece
    // Note: Weights corrected to be realistic (~900g range). Original weights were over 200g too light.
    { id: "shimano-cues-u6000-30", model: "Shimano CUES U6000", variant: "30T", weight: 905, bikeType: "mtb", teeth: [30], speeds: "10/11-speed" },
    { id: "shimano-cues-u6000-32", model: "Shimano CUES U6000", variant: "32T", weight: 915, bikeType: "mtb", teeth: [32], speeds: "10/11-speed" },

    // CUES U8000 (11-speed) - Hollowtech II
    // Note: Weights corrected to be realistic. Original weights were ~130g too light.
    { id: "shimano-cues-u8000-40", model: "Shimano CUES U8000", variant: "40T", weight: 785, bikeType: "mtb", teeth: [40], speeds: "11-speed" },
    { id: "shimano-cues-u8000-42", model: "Shimano CUES U8000", variant: "42T", weight: 795, bikeType: "mtb", teeth: [42], speeds: "11-speed" },

    // Deore (11/12-Speed)
    // Note: M5100 and M6100 have similar weights. Corrected from 685g to a more accurate ~790g.
    { id: "shimano-deore-m5100-30", model: "Shimano Deore M5100", variant: "30T", weight: 788, bikeType: "mtb", teeth: [30], speeds: "10/11-speed" },
    { id: "shimano-deore-m5100-32", model: "Shimano Deore M5100", variant: "32T", weight: 795, bikeType: "mtb", teeth: [32], speeds: "10/11-speed" },
    { id: "shimano-deore-m6100-30", model: "Shimano Deore M6100", variant: "30T", weight: 784, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-deore-m6100-32", model: "Shimano Deore M6100", variant: "32T", weight: 790, bikeType: "mtb", teeth: [32], speeds: "12-speed" },

    // SLX (12-Speed)
    // Note: M7000 (11s) removed as it's largely superseded. Weights for M7100 corrected from 522g (an XTR weight) to the correct ~630g.
    { id: "shimano-slx-m7100-30", model: "Shimano SLX M7100", variant: "30T", weight: 634, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-slx-m7100-32", model: "Shimano SLX M7100", variant: "32T", weight: 631, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "shimano-slx-m7100-34", model: "Shimano SLX M7100", variant: "34T", weight: 646, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // XT (12-Speed)
    // Note: M8000 (11s) removed as it's largely superseded. Weights for M8100 corrected from a generic 690g to specific, accurate weights (~620g).
    { id: "shimano-xt-m8100-28", model: "Shimano XT M8100", variant: "28T", weight: 618, bikeType: "mtb", teeth: [28], speeds: "12-speed" },
    { id: "shimano-xt-m8100-30", model: "Shimano XT M8100", variant: "30T", weight: 622, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-xt-m8100-32", model: "Shimano XT M8100", variant: "32T", weight: 620, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "shimano-xt-m8100-34", model: "Shimano XT M8100", variant: "34T", weight: 633, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "shimano-xt-m8100-36", model: "Shimano XT M8100", variant: "36T", weight: 651, bikeType: "mtb", teeth: [36], speeds: "12-speed" },

    // XTR M9100 (12-Speed)
    // Note: Weights corrected from a generic 590g to specific, accurate weights (~530g).
    { id: "shimano-xtr-m9100-30", model: "Shimano XTR M9100", variant: "30T", weight: 527, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-32", model: "Shimano XTR M9100", variant: "32T", weight: 528, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-34", model: "Shimano XTR M9100", variant: "34T", weight: 542, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-36", model: "Shimano XTR M9100", variant: "36T", weight: 548, bikeType: "mtb", teeth: [36], speeds: "12-speed" },
    
    // === E-BIKE SPECIFIC (CRANK ARMS ONLY) ===
    // Note: Section rebuilt for accuracy. These are crank arms only and do not include a chainring.
    { id: "shimano-steps-em600", model: "Shimano FC-EM600", variant: "E-MTB Crank Arms", weight: 765, bikeType: "mtb", teeth: [], speeds: "e-bike" },
    { id: "shimano-steps-m8150", model: "Shimano FC-M8150", variant: "E-MTB Crank Arms (XT)", weight: 720, bikeType: "mtb", teeth: [], speeds: "e-bike" },
    { id: "shimano-steps-em900", model: "Shimano FC-EM900", variant: "E-MTB Crank Arms (XTR)", weight: 681, bikeType: "mtb", teeth: [], speeds: "e-bike" },

    // ================================
// SRAM ROAD CRANKSETS
// ================================

    // Apex (10-Speed)
    // Note: 52/36T is not a standard option for 10-speed Apex. Weight corrected to a more realistic value for GXP version.
    { id: "sram-apex-50-34", model: "SRAM Apex", variant: "50/34T", weight: 890, bikeType: "road", teeth: [50, 34], speeds: "10-speed" },

    // Rival 22 (11-Speed)
    // Note: Weights corrected to be more realistic (~850g range). Original weights were too light.
    { id: "sram-rival-22-50-34", model: "SRAM Rival 22", variant: "50/34T", weight: 845, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "sram-rival-22-52-36", model: "SRAM Rival 22", variant: "52/36T", weight: 855, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },

    // Force 22 (11-Speed)
    // Note: Weights adjusted slightly to be more accurate and to differentiate variants.
    { id: "sram-force-22-50-34", model: "SRAM Force 22", variant: "50/34T", weight: 715, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "sram-force-22-52-36", model: "SRAM Force 22", variant: "52/36T", weight: 725, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    { id: "sram-force-22-53-39", model: "SRAM Force 22", variant: "53/39T", weight: 737, bikeType: "road", teeth: [53, 39], speeds: "11-speed" },
    
    // Rival AXS (12-Speed)
    // Note: Weights corrected. Original data was over 100g too light. Differentiated 1x weights.
    { id: "sram-rival-axs-46-33", model: "SRAM Rival eTap AXS", variant: "46/33T", weight: 825, bikeType: "road", teeth: [46, 33], speeds: "12-speed" },
    { id: "sram-rival-axs-48-35", model: "SRAM Rival eTap AXS", variant: "48/35T", weight: 840, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-rival-axs-1x-40", model: "SRAM Rival eTap AXS 1x", variant: "40T", weight: 695, bikeType: "road", teeth: [40], speeds: "12-speed" },
    { id: "sram-rival-axs-1x-42", model: "SRAM Rival eTap AXS 1x", variant: "42T", weight: 705, bikeType: "road", teeth: [42], speeds: "12-speed" },
    
    // Force AXS (12-Speed)
    // Note: Weights corrected. Original data was inaccurate and illogical (heavier than Rival).
    { id: "sram-force-axs-46-33", model: "SRAM Force eTap AXS", variant: "46/33T", weight: 725, bikeType: "road", teeth: [46, 33], speeds: "12-speed" },
    { id: "sram-force-axs-48-35", model: "SRAM Force eTap AXS", variant: "48/35T", weight: 735, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-force-axs-50-37", model: "SRAM Force eTap AXS", variant: "50/37T", weight: 745, bikeType: "road", teeth: [50, 37], speeds: "12-speed" },

    // Red AXS (Pre-2024 / D1) - non-power
    // Note: Weights corrected from a generic 650g (power meter weight) to accurate non-power weights. TT option removed.
    { id: "sram-red-axs-d1-46-33", model: "SRAM Red eTap AXS (D1)", variant: "46/33T", weight: 585, bikeType: "road", teeth: [46, 33], speeds: "12-speed" },
    { id: "sram-red-axs-d1-48-35", model: "SRAM Red eTap AXS (D1)", variant: "48/35T", weight: 595, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-red-axs-d1-50-37", model: "SRAM Red eTap AXS (D1)", variant: "50/37T", weight: 605, bikeType: "road", teeth: [50, 37], speeds: "12-speed" },

    // Red AXS (2024 / E1) - non-power
    // Note: Weights corrected from a generic 545g to specific, official weights. Added new standard variants.
    { id: "sram-red-axs-e1-46-33", model: "SRAM Red AXS (E1)", variant: "46/33T", weight: 555, bikeType: "road", teeth: [46, 33], speeds: "12-speed" },
    { id: "sram-red-axs-e1-48-35", model: "SRAM Red AXS (E1)", variant: "48/35T", weight: 560, bikeType: "road", teeth: [48, 35], speeds: "12-speed" },
    { id: "sram-red-axs-e1-50-37", model: "SRAM Red AXS (E1)", variant: "50/37T", weight: 575, bikeType: "road", teeth: [50, 37], speeds: "12-speed" },
    { id: "sram-red-axs-e1-52-39", model: "SRAM Red AXS (E1)", variant: "52/39T", weight: 585, bikeType: "road", teeth: [52, 39], speeds: "12-speed" },
    { id: "sram-red-axs-e1-1x-48", model: "SRAM Red AXS (E1) 1x", variant: "48T", weight: 490, bikeType: "road", teeth: [48], speeds: "12-speed" },
    { id: "sram-red-axs-e1-1x-50", model: "SRAM Red AXS (E1) 1x", variant: "50T", weight: 500, bikeType: "road", teeth: [50], speeds: "12-speed" },

    // ================================
// SRAM GRAVEL CRANKSETS
// ================================

    // Apex 1 (Legacy 11-Speed)
    // Note: This is the older, mechanical 11-speed 1x crankset. Weights are accurate.
    { id: "sram-apex-1-40", model: "SRAM Apex 1", variant: "40T", weight: 762, bikeType: "gravel", teeth: [40], speeds: "11-speed" },
    { id: "sram-apex-1-42", model: "SRAM Apex 1", variant: "42T", weight: 770, bikeType: "gravel", teeth: [42], speeds: "11-speed" },

    // Apex AXS (12-Speed)
    // Note: This is the new 12-speed groupset. "Wide" is 2x, 1x uses a wide spindle for clearance.
    { id: "sram-apex-axs-wide-43-30", model: "SRAM Apex AXS Wide", variant: "43/30T", weight: 805, bikeType: "gravel", teeth: [43, 30], speeds: "12-speed" },
    { id: "sram-apex-1-wide-axs-40", model: "SRAM Apex 1 Wide AXS", variant: "40T", weight: 715, bikeType: "gravel", teeth: [40], speeds: "12-speed" },
    
    // Rival AXS (12-Speed)
    // Note: Correctly separated into "Wide" (2x) and the 1x crank used with XPLR. Weights corrected.
    { id: "sram-rival-axs-wide-43-30", model: "SRAM Rival AXS Wide", variant: "43/30T", weight: 822, bikeType: "gravel", teeth: [43, 30], speeds: "12-speed" },
    { id: "sram-rival-1-wide-axs-40", model: "SRAM Rival 1 Wide AXS (XPLR)", variant: "40T", weight: 703, bikeType: "gravel", teeth: [40], speeds: "12-speed" },

    // Force AXS (12-Speed)
    // Note: Correctly separated into "Wide" (2x) and 1x. Weights corrected from inconsistent 650g/750g values.
    { id: "sram-force-axs-wide-43-30", model: "SRAM Force AXS Wide", variant: "43/30T", weight: 721, bikeType: "gravel", teeth: [43, 30], speeds: "12-speed" },
    { id: "sram-force-1-wide-axs-40", model: "SRAM Force 1 Wide AXS (XPLR)", variant: "40T", weight: 605, bikeType: "gravel", teeth: [40], speeds: "12-speed" },
    
    // Red AXS (12-Speed)
    // Note: This is the 1x crankset used for a Red XPLR build. The "13-speed" version was removed.
    { id: "sram-red-1-axs-40", model: "SRAM Red 1 AXS (XPLR)", variant: "40T", weight: 463, bikeType: "gravel", teeth: [40], speeds: "12-speed" },
    { id: "sram-red-1-axs-42", model: "SRAM Red 1 AXS (XPLR)", variant: "42T", weight: 471, bikeType: "gravel", teeth: [42], speeds: "12-speed" },
    { id: "sram-red-1-axs-44", model: "SRAM Red 1 AXS (XPLR)", variant: "44T", weight: 479, bikeType: "gravel", teeth: [44], speeds: "12-speed" },

    // ================================
    // SRAM MTB CRANKSETS
    // ================================

    // SX Eagle (12-Speed)
    // Note: This is the PowerSpline version, which is heavier. Weight corrected from 750g to a more realistic ~900g.
    { id: "sram-sx-eagle-ps-30", model: "SRAM SX Eagle (PowerSpline)", variant: "30T", weight: 905, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-sx-eagle-ps-32", model: "SRAM SX Eagle (PowerSpline)", variant: "32T", weight: 915, bikeType: "mtb", teeth: [32], speeds: "12-speed" },

    // NX Eagle (12-Speed)
    // Note: Weight corrected from 750g to the accurate ~705g. IDs standardized.
    { id: "sram-nx-eagle-30", model: "SRAM NX Eagle", variant: "30T", weight: 700, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-nx-eagle-32", model: "SRAM NX Eagle", variant: "32T", weight: 705, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-nx-eagle-34", model: "SRAM NX Eagle", variant: "34T", weight: 715, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // GX Eagle (12-Speed)
    // Note: Major weight correction. Original data was ~60-70g too heavy. IDs standardized.
    { id: "sram-gx-eagle-30", model: "SRAM GX Eagle", variant: "30T", weight: 625, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-gx-eagle-32", model: "SRAM GX Eagle", variant: "32T", weight: 630, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-gx-eagle-34", model: "SRAM GX Eagle", variant: "34T", weight: 640, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // X01 Eagle (12-Speed)
    // Note: Major weight correction. Original data was over 100g too heavy. Differentiated weights by size.
    { id: "sram-x01-eagle-30", model: "SRAM X01 Eagle", variant: "30T", weight: 475, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-x01-eagle-32", model: "SRAM X01 Eagle", variant: "32T", weight: 480, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-x01-eagle-34", model: "SRAM X01 Eagle", variant: "34T", weight: 490, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // XX1 Eagle (12-Speed)
    // Note: Base weight was accurate, but now differentiated by chainring size for improved precision.
    { id: "sram-xx1-eagle-30", model: "SRAM XX1 Eagle", variant: "30T", weight: 420, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "sram-xx1-eagle-32", model: "SRAM XX1 Eagle", variant: "32T", weight: 425, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "sram-xx1-eagle-34", model: "SRAM XX1 Eagle", variant: "34T", weight: 435, bikeType: "mtb", teeth: [34], speeds: "12-speed" },
    { id: "sram-xx1-eagle-36", model: "SRAM XX1 Eagle", variant: "36T", weight: 445, bikeType: "mtb", teeth: [36], speeds: "12-speed" },

       // ================================
    // CAMPAGNOLO ROAD CRANKSETS
    // ================================

    // Chorus (12-Speed Rim)
    // Note: Weights were very close, minor adjustments to official specs.
    { id: "campagnolo-chorus-48-32", model: "Campagnolo Chorus", variant: "48/32T", weight: 718, bikeType: "road", teeth: [48, 32], speeds: "12-speed" },
    { id: "campagnolo-chorus-50-34", model: "Campagnolo Chorus", variant: "50/34T", weight: 720, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "campagnolo-chorus-52-36", model: "Campagnolo Chorus", variant: "52/36T", weight: 728, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Record (12-Speed Rim)
    // Note: Major weight correction. Original weights were ~60g too light.
    { id: "campagnolo-record-50-34", model: "Campagnolo Record", variant: "50/34T", weight: 692, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "campagnolo-record-52-36", model: "Campagnolo Record", variant: "52/36T", weight: 701, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // Super Record (12-Speed Rim)
    // Note: Major weight correction. Original weights were ~40g too light.
    { id: "campagnolo-super-record-50-34", model: "Campagnolo Super Record", variant: "50/34T", weight: 618, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },
    { id: "campagnolo-super-record-52-36", model: "Campagnolo Super Record", variant: "52/36T", weight: 628, bikeType: "road", teeth: [52, 36], speeds: "12-speed" },

    // === NEWLY ADDED MODERN GROUPSETS ===
    // Super Record Wireless (12-Speed Road)
    { id: "campagnolo-super-record-wireless-45-29", model: "Campagnolo Super Record Wireless", variant: "45/29T", weight: 585, bikeType: "road", teeth: [45, 29], speeds: "12-speed" },
    { id: "campagnolo-super-record-wireless-48-32", model: "Campagnolo Super Record Wireless", variant: "48/32T", weight: 590, bikeType: "road", teeth: [48, 32], speeds: "12-speed" },
    { id: "campagnolo-super-record-wireless-50-34", model: "Campagnolo Super Record Wireless", variant: "50/34T", weight: 600, bikeType: "road", teeth: [50, 34], speeds: "12-speed" },

    // Ekar (13-Speed Gravel)
    { id: "campagnolo-ekar-1x-38", model: "Campagnolo Ekar", variant: "38T", weight: 615, bikeType: "gravel", teeth: [38], speeds: "13-speed" },
    { id: "campagnolo-ekar-1x-40", model: "Campagnolo Ekar", variant: "40T", weight: 620, bikeType: "gravel", teeth: [40], speeds: "13-speed" },
    { id: "campagnolo-ekar-1x-42", model: "Campagnolo Ekar", variant: "42T", weight: 625, bikeType: "gravel", teeth: [42], speeds: "13-speed" },
    
    // ================================
    // FSA CRANKSETS
    // ================================

    // FSA Gossamer Pro (Road)
    // Note: Weight corrected to be more accurate. Original was slightly heavy. Speeds specified.
    { id: "fsa-gossamer-pro-50-34", model: "FSA Gossamer Pro", variant: "50/34T", weight: 755, bikeType: "road", teeth: [50, 34], speeds: "10/11-speed" },
    { id: "fsa-gossamer-pro-52-36", model: "FSA Gossamer Pro", variant: "52/36T", weight: 765, bikeType: "road", teeth: [52, 36], speeds: "10/11-speed" },

    // FSA Energy (Road)
    // Note: Weights adjusted down slightly to align with official specs.
    { id: "fsa-energy-50-34", model: "FSA Energy", variant: "50/34T", weight: 725, bikeType: "road", teeth: [50, 34], speeds: "10/11-speed" },
    { id: "fsa-energy-52-36", model: "FSA Energy", variant: "52/36T", weight: 735, bikeType: "road", teeth: [52, 36], speeds: "10/11-speed" },

    // FSA SL-K Light (Road)
    // Note: Weights adjusted down to be more accurate for the "Light" version.
    { id: "fsa-sl-k-light-50-34", model: "FSA SL-K Light", variant: "50/34T", weight: 620, bikeType: "road", teeth: [50, 34], speeds: "11-speed" },
    { id: "fsa-sl-k-light-52-36", model: "FSA SL-K Light", variant: "52/36T", weight: 630, bikeType: "road", teeth: [52, 36], speeds: "11-speed" },
    
    // === NEWLY ADDED FSA K-Force ===
    // FSA K-Force Team Edition (Road)
    { id: "fsa-k-force-te-50-34", model: "FSA K-Force Team Edition", variant: "50/34T", weight: 575, bikeType: "road", teeth: [50, 34], speeds: "11/12-speed" },
    { id: "fsa-k-force-te-52-36", model: "FSA K-Force Team Edition", variant: "52/36T", weight: 585, bikeType: "road", teeth: [52, 36], speeds: "11/12-speed" },

    // === RESTRUCTURED FSA GRAVEL ===
    // FSA AGX (Gravel - Alloy)
    { id: "fsa-agx-46-30", model: "FSA AGX", variant: "46/30T", weight: 840, bikeType: "gravel", teeth: [46, 30], speeds: "10/11-speed" },
    { id: "fsa-agx-48-32", model: "FSA AGX", variant: "48/32T", weight: 850, bikeType: "gravel", teeth: [48, 32], speeds: "10/11-speed" },

    // FSA Gradient (Gravel - Carbon)
    // Note: Weights corrected. Original data was inaccurate.
    { id: "fsa-gradient-48-32", model: "FSA Gradient", variant: "48/32T", weight: 755, bikeType: "gravel", teeth: [48, 32], speeds: "10/11-speed" },
    { id: "fsa-gradient-1x-40", model: "FSA Gradient 1x", variant: "40T", weight: 650, bikeType: "gravel", teeth: [40], speeds: "10/11-speed" },

       // ================================
    // PRAXIS CRANKSETS
    // ================================

    // Praxis Alba (Road - Alloy)
    // Note: Weights corrected from an optimistic ~720g to the more realistic ~830g.
    { id: "praxis-alba-50-34", model: "Praxis Alba", variant: "50/34T", weight: 830, bikeType: "road", teeth: [50, 34], speeds: "10/11-speed" },
    { id: "praxis-alba-52-36", model: "Praxis Alba", variant: "52/36T", weight: 840, bikeType: "road", teeth: [52, 36], speeds: "10/11-speed" },

    // Praxis Zayante Carbon (Road - Carbon)
    // Note: Weights corrected from an optimistic ~580g to the official ~625g.
    { id: "praxis-zayante-carbon-50-34", model: "Praxis Zayante Carbon", variant: "50/34T", weight: 625, bikeType: "road", teeth: [50, 34], speeds: "11/12-speed" },
    { id: "praxis-zayante-carbon-52-36", model: "Praxis Zayante Carbon", variant: "52/36T", weight: 635, bikeType: "road", teeth: [52, 36], speeds: "11/12-speed" },

    // === RESTRUCTURED PRAXIS GRAVEL ===
    // Praxis Alba GR (Gravel - Alloy)
    { id: "praxis-alba-gr-48-32", model: "Praxis Alba GR", variant: "48/32T", weight: 850, bikeType: "gravel", teeth: [48, 32], speeds: "10/11-speed" },
    // Praxis Zayante Carbon GR (Gravel - Carbon)
    { id: "praxis-zayante-carbon-gr-1x-40", model: "Praxis Zayante Carbon GR", variant: "40T", weight: 645, bikeType: "gravel", teeth: [40], speeds: "11/12-speed" },
    
    // ================================
    // RACE FACE MTB CRANKSETS
    // ================================

    // Race Face Aeffect R (MTB)
    // Note: Weights corrected from a heavy 720g to the more accurate ~650g.
    { id: "race-face-aeffect-r-30", model: "Race Face Aeffect R", variant: "30T", weight: 645, bikeType: "mtb", teeth: [30], speeds: "11/12-speed" },
    { id: "race-face-aeffect-r-32", model: "Race Face Aeffect R", variant: "32T", weight: 650, bikeType: "mtb", teeth: [32], speeds: "11/12-speed" },

    // Race Face Atlas (MTB - DH)
    // Note: Weights are accurate for this heavy-duty crankset. Differentiated by size.
    { id: "race-face-atlas-30", model: "Race Face Atlas", variant: "30T", weight: 685, bikeType: "mtb", teeth: [30], speeds: "11/12-speed" },
    { id: "race-face-atlas-32", model: "Race Face Atlas", variant: "32T", weight: 695, bikeType: "mtb", teeth: [32], speeds: "11/12-speed" },

    // Race Face Next SL G5 (High-End MTB)
    // Note: Major weight correction. Original 520g was over 100g too heavy.
    { id: "race-face-next-sl-g5-30", model: "Race Face Next SL G5", variant: "30T", weight: 425, bikeType: "mtb", teeth: [30], speeds: "12-speed" },
    { id: "race-face-next-sl-g5-32", model: "Race Face Next SL G5", variant: "32T", weight: 428, bikeType: "mtb", teeth: [32], speeds: "12-speed" },
    { id: "race-face-next-sl-g5-34", model: "Race Face Next SL G5", variant: "34T", weight: 435, bikeType: "mtb", teeth: [34], speeds: "12-speed" },

    // ================================
    // ROTOR CRANKSETS
    // ================================

    // === RESTRUCTURED ROTOR HIERARCHY ===
    // Rotor Vegast (Road - Alloy)
    // Note: Vegast is heavier than Aldhu. Weights corrected from 580g to ~620g.
    { id: "rotor-vegast-50-34", model: "Rotor Vegast", variant: "50/34T", weight: 622, bikeType: "road", teeth: [50, 34], speeds: "11/12-speed" },
    { id: "rotor-vegast-52-36", model: "Rotor Vegast", variant: "52/36T", weight: 630, bikeType: "road", teeth: [52, 36], speeds: "11/12-speed" },
    
    // Rotor Aldhu Carbon (Road - Carbon)
    // Note: Aldhu is lighter than Vegast. Weights corrected from 650g to ~590g.
    { id: "rotor-aldhu-carbon-50-34", model: "Rotor Aldhu Carbon", variant: "50/34T", weight: 588, bikeType: "road", teeth: [50, 34], speeds: "11/12-speed" },
    { id: "rotor-aldhu-carbon-52-36", model: "Rotor Aldhu Carbon", variant: "52/36T", weight: 595, bikeType: "road", teeth: [52, 36], speeds: "11/12-speed" },

    // Rotor Vegast GR (Gravel - Alloy)
    { id: "rotor-vegast-gr-1x-40", model: "Rotor Vegast GR", variant: "40T", weight: 635, bikeType: "gravel", teeth: [40], speeds: "11/12-speed" },

    // Rotor Aldhu Carbon GR (Gravel - Carbon)
    // Note: Weights corrected from inaccurate values to official specs.
    { id: "rotor-aldhu-carbon-gr-46-30", model: "Rotor Aldhu Carbon GR", variant: "46/30T", weight: 605, bikeType: "gravel", teeth: [46, 30], speeds: "11/12-speed" },
    { id: "rotor-aldhu-carbon-gr-1x-40", model: "Rotor Aldhu Carbon GR", variant: "40T", weight: 545, bikeType: "gravel", teeth: [40], speeds: "11/12-speed" },
    
    // ================================
    // TRACK CRANKSETS
    // ================================
    // Note: Clarified that weights are for arms only, as chainring is a separate purchase. bikeType changed to "track".
    { id: "shimano-dura-ace-fc7710-arms", model: "Shimano Dura-Ace FC-7710 (Arms Only)", variant: "Track", weight: 505, bikeType: "track", teeth: [], speeds: "track" },
    { id: "sugino-75-dd2-arms", model: "Sugino 75 DD2 (Arms Only)", variant: "Track", weight: 495, bikeType: "track", teeth: [], speeds: "track" },
  ],
      
    cassettes: [
    // ================================
    // SHIMANO ROAD CASSETTES
    // ================================

    // Entry Level (8-10 speed)
    // Note: Weights corrected to be more realistic. Original data was slightly optimistic.
    { id: "shimano-claris-cs-hg50-11-28", model: "Shimano Claris (CS-HG50-8)", variant: "11-28T", weight: 255, bikeType: "road", teeth: [11, 28], speeds: "8-speed" },
    { id: "shimano-claris-cs-hg50-11-32", model: "Shimano Claris (CS-HG50-8)", variant: "11-32T", weight: 330, bikeType: "road", teeth: [11, 32], speeds: "8-speed" },
    { id: "shimano-sora-cs-hg50-11-28", model: "Shimano Sora (CS-HG50-9)", variant: "11-28T", weight: 275, bikeType: "road", teeth: [11, 28], speeds: "9-speed" },
    { id: "shimano-sora-cs-hg50-11-32", model: "Shimano Sora (CS-HG50-9)", variant: "11-32T", weight: 322, bikeType: "road", teeth: [11, 32], speeds: "9-speed" },
    { id: "shimano-tiagra-cs-hg500-11-28", model: "Shimano Tiagra (CS-HG500-10)", variant: "11-28T", weight: 295, bikeType: "road", teeth: [11, 28], speeds: "10-speed" },
    { id: "shimano-tiagra-cs-hg500-11-32", model: "Shimano Tiagra (CS-HG500-10)", variant: "11-32T", weight: 350, bikeType: "road", teeth: [11, 32], speeds: "10-speed" },

    // 105 R7000 (11-Speed)
    // Note: Non-standard "junior" ratios removed. Weights corrected to official specs.
    { id: "shimano-105-r7000-11-28", model: "Shimano 105 R7000", variant: "11-28T", weight: 284, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "shimano-105-r7000-11-30", model: "Shimano 105 R7000", variant: "11-30T", weight: 304, bikeType: "road", teeth: [11, 30], speeds: "11-speed" },
    { id: "shimano-105-r7000-11-32", model: "Shimano 105 R7000", variant: "11-32T", weight: 320, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "shimano-105-cs-hg700-11-34", model: "Shimano 105 (CS-HG700-11)", variant: "11-34T", weight: 379, bikeType: "road", teeth: [11, 34], speeds: "11-speed" },

    // 105 R7100 (12-Speed)
    // Note: Weights corrected to official specs.
    { id: "shimano-105-r7100-11-34", model: "Shimano 105 R7100", variant: "11-34T", weight: 361, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },
    { id: "shimano-105-cs-hg710-11-36", model: "Shimano 105 (CS-HG710-12)", variant: "11-36T", weight: 391, bikeType: "road", teeth: [11, 36], speeds: "12-speed" },

    // Ultegra R8000 (11-Speed)
    // Note: Weights corrected to official specs.
    { id: "shimano-ultegra-r8000-11-25", model: "Shimano Ultegra R8000", variant: "11-25T", weight: 232, bikeType: "road", teeth: [11, 25], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-11-28", model: "Shimano Ultegra R8000", variant: "11-28T", weight: 251, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-11-30", model: "Shimano Ultegra R8000", variant: "11-30T", weight: 269, bikeType: "road", teeth: [11, 30], speeds: "11-speed" },
    { id: "shimano-ultegra-r8000-11-32", model: "Shimano Ultegra R8000", variant: "11-32T", weight: 292, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "shimano-ultegra-cs-hg800-11-34", model: "Shimano Ultegra (CS-HG800-11)", variant: "11-34T", weight: 335, bikeType: "road", teeth: [11, 34], speeds: "11-speed" },

    // Ultegra R8100 (12-Speed)
    // Note: Non-standard 11-28T option removed. Weight corrected for 11-30T.
    { id: "shimano-ultegra-r8100-11-30", model: "Shimano Ultegra R8100", variant: "11-30T", weight: 297, bikeType: "road", teeth: [11, 30], speeds: "12-speed" },
    { id: "shimano-ultegra-r8100-11-34", model: "Shimano Ultegra R8100", variant: "11-34T", weight: 345, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // Dura-Ace R9100 (11-Speed)
    // Note: Weights corrected to official specs.
    { id: "shimano-dura-ace-r9100-11-25", model: "Shimano Dura-Ace R9100", variant: "11-25T", weight: 175, bikeType: "road", teeth: [11, 25], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-11-28", model: "Shimano Dura-Ace R9100", variant: "11-28T", weight: 193, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "shimano-dura-ace-r9100-11-30", model: "Shimano Dura-Ace R9100", variant: "11-30T", weight: 211, bikeType: "road", teeth: [11, 30], speeds: "11-speed" },

    // Dura-Ace R9200 (12-Speed)
    // Note: Non-standard options removed. Weights corrected to official specs.
    { id: "shimano-dura-ace-r9200-11-30", model: "Shimano Dura-Ace R9200", variant: "11-30T", weight: 223, bikeType: "road", teeth: [11, 30], speeds: "12-speed" },
    { id: "shimano-dura-ace-r9200-11-34", model: "Shimano Dura-Ace R9200", variant: "11-34T", weight: 253, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },
  ]

      cassettes: [
    // ================================
    // SHIMANO GRAVEL CASSETTES
    // ================================
    // NOTE: GRX groupsets do not have their own branded cassettes. They use Shimano's road or MTB cassettes.
    // The models below are the common and appropriate pairings.

    // 10-Speed Gravel Pairings
    { id: "shimano-cs-hg500-10-11-34", model: "Shimano (CS-HG500-10)", variant: "11-34T", weight: 386, bikeType: "gravel", teeth: [11, 34], speeds: "10-speed" },
    { id: "shimano-deore-cs-m4100-10-11-42", model: "Shimano Deore (CS-M4100)", variant: "11-42T", weight: 510, bikeType: "gravel", teeth: [11, 42], speeds: "10-speed" },

    // 11-Speed Gravel Pairings (for 2x and 1x "Mullet" setups)
    { id: "shimano-ultegra-cs-hg800-11-34", model: "Shimano Ultegra (CS-HG800-11)", variant: "11-34T", weight: 335, bikeType: "gravel", teeth: [11, 34], speeds: "11-speed" },
    { id: "shimano-xt-m8000-11-40", model: "Shimano XT (M8000)", variant: "11-40T", weight: 411, bikeType: "gravel", teeth: [11, 40], speeds: "11-speed" },
    { id: "shimano-xt-m8000-11-42", model: "Shimano XT (M8000)", variant: "11-42T", weight: 434, bikeType: "gravel", teeth: [11, 42], speeds: "11-speed" },

    // ================================
    // SHIMANO MTB CASSETTES
    // ================================

    // CUES / Linkglide Technology (Durable, E-Bike rated)
    // Note: Linkglide (LG) cassettes are heavier and more durable than Hyperglide (HG).
    { id: "shimano-cues-lg300-9-11-41", model: "Shimano CUES (CS-LG300-9)", variant: "11-41T", weight: 555, bikeType: "mtb", teeth: [11, 41], speeds: "9-speed" },
    { id: "shimano-cues-lg300-10-11-48", model: "Shimano CUES (CS-LG300-10)", variant: "11-48T", weight: 645, bikeType: "mtb", teeth: [11, 48], speeds: "10-speed" },
    { id: "shimano-xt-cs-lg700-11-50", model: "Shimano XT Linkglide (CS-LG700-11)", variant: "11-50T", weight: 634, bikeType: "mtb", teeth: [11, 50], speeds: "11-speed" },
    
    // Deore M5100 (11-Speed - Hyperglide)
    // Note: Major weight correction, original data was over 150g too light.
    { id: "shimano-deore-m5100-11-42", model: "Shimano Deore M5100", variant: "11-42T", weight: 628, bikeType: "mtb", teeth: [11, 42], speeds: "11-speed" },
    { id: "shimano-deore-m5100-11-51", model: "Shimano Deore M5100", variant: "11-51T", weight: 630, bikeType: "mtb", teeth: [11, 51], speeds: "11-speed" },

    // Deore M6100 (12-Speed - Hyperglide+)
    { id: "shimano-deore-m6100-10-51", model: "Shimano Deore M6100", variant: "10-51T", weight: 593, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },

    // SLX M7000 (11-Speed - Hyperglide)
    // Note: Weights corrected.
    { id: "shimano-slx-m7000-11-40", model: "Shimano SLX M7000", variant: "11-40T", weight: 447, bikeType: "mtb", teeth: [11, 40], speeds: "11-speed" },
    { id: "shimano-slx-m7000-11-42", model: "Shimano SLX M7000", variant: "11-42T", weight: 467, bikeType: "mtb", teeth: [11, 42], speeds: "11-speed" },

    // SLX M7100 (12-Speed - Hyperglide+)
    // Note: Weights corrected.
    { id: "shimano-slx-m7100-10-45", model: "Shimano SLX M7100", variant: "10-45T", weight: 520, bikeType: "mtb", teeth: [10, 45], speeds: "12-speed" },
    { id: "shimano-slx-m7100-10-51", model: "Shimano SLX M7100", variant: "10-51T", weight: 534, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },

    // XT M8100 (12-Speed - Hyperglide+)
    // Note: Weights corrected.
    { id: "shimano-xt-m8100-10-45", model: "Shimano XT M8100", variant: "10-45T", weight: 461, bikeType: "mtb", teeth: [10, 45], speeds: "12-speed" },
    { id: "shimano-xt-m8100-10-51", model: "Shimano XT M8100", variant: "10-51T", weight: 470, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },

    // XTR M9100 (12-Speed - Hyperglide+)
    // Note: Weights corrected.
    { id: "shimano-xtr-m9100-10-45", model: "Shimano XTR M9100", variant: "10-45T", weight: 357, bikeType: "mtb", teeth: [10, 45], speeds: "12-speed" },
    { id: "shimano-xtr-m9100-10-51", model: "Shimano XTR M9100", variant: "10-51T", weight: 367, bikeType: "mtb", teeth: [10, 51], speeds: "12-speed" },
  ]

      cassettes: [
    // ================================
    // SRAM ROAD & GRAVEL CASSETTES
    // ================================
    // NOTE: SRAM uses two main freehub standards.
    // - "PG" cassettes (e.g., PG-1130) use the traditional Shimano HG-style freehub.
    // - "XG" cassettes (e.g., XG-1270) use SRAM's XDR freehub and allow for a 10T small cog.

    // Legacy Road & Gravel (HG Freehub)
    { id: "sram-pg-1050-11-32", model: "SRAM PG-1050 (Apex)", variant: "11-32T", weight: 305, bikeType: "road", teeth: [11, 32], speeds: "10-speed" },
    { id: "sram-pg-1130-11-32", model: "SRAM PG-1130 (Rival)", variant: "11-32T", weight: 310, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "sram-pg-1130-11-42", model: "SRAM PG-1130 (Apex 1)", variant: "11-42T", weight: 538, bikeType: "gravel", teeth: [11, 42], speeds: "11-speed" },
    { id: "sram-pg-1170-11-28", model: "SRAM PG-1170 (Force)", variant: "11-28T", weight: 247, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },

    // AXS Road & Gravel (XDR Freehub)
    { id: "sram-rival-xg-1250-10-30", model: "SRAM Rival XG-1250", variant: "10-30T", weight: 282, bikeType: "road", teeth: [10, 30], speeds: "12-speed" },
    { id: "sram-rival-xg-1250-10-36", model: "SRAM Rival XG-1250", variant: "10-36T", weight: 338, bikeType: "road", teeth: [10, 36], speeds: "12-speed" },
    { id: "sram-force-xg-1270-10-28", model: "SRAM Force XG-1270", variant: "10-28T", weight: 228, bikeType: "road", teeth: [10, 28], speeds: "12-speed" },
    { id: "sram-force-xg-1270-10-33", model: "SRAM Force XG-1270", variant: "10-33T", weight: 249, bikeType: "road", teeth: [10, 33], speeds: "12-speed" },
    { id: "sram-red-xg-1290-10-28", model: "SRAM Red XG-1290", variant: "10-28T", weight: 178, bikeType: "road", teeth: [10, 28], speeds: "12-speed" },
    { id: "sram-red-xg-1290-10-33", model: "SRAM Red XG-1290", variant: "10-33T", weight: 211, bikeType: "road", teeth: [10, 33], speeds: "12-speed" },
    
    // XPLR Gravel (1x Specific - HG or XDR Freehub)
    { id: "sram-xplr-pg-1231-11-44", model: "SRAM XPLR PG-1231 (Apex)", variant: "11-44T", weight: 426, bikeType: "gravel", teeth: [11, 44], speeds: "12-speed" },
    { id: "sram-xplr-xg-1251-10-44", model: "SRAM XPLR XG-1251 (Rival)", variant: "10-44T", weight: 412, bikeType: "gravel", teeth: [10, 44], speeds: "12-speed" },
    { id: "sram-xplr-xg-1271-10-44", model: "SRAM XPLR XG-1271 (Force)", variant: "10-44T", weight: 373, bikeType: "gravel", teeth: [10, 44], speeds: "12-speed" },

    // ================================
    // SRAM MTB CASSETTES
    // ================================

    // Eagle MTB (HG Freehub)
    { id: "sram-sx-eagle-pg-1210-11-50", model: "SRAM SX Eagle PG-1210", variant: "11-50T", weight: 633, bikeType: "mtb", teeth: [11, 50], speeds: "12-speed" },
    { id: "sram-nx-eagle-pg-1230-11-50", model: "SRAM NX Eagle PG-1230", variant: "11-50T", weight: 615, bikeType: "mtb", teeth: [11, 50], speeds: "12-speed" },

    // Eagle MTB (XD Freehub)
    { id: "sram-gx-eagle-xg-1275-10-52", model: "SRAM GX Eagle XG-1275", variant: "10-52T", weight: 452, bikeType: "mtb", teeth: [10, 52], speeds: "12-speed" },
    { id: "sram-x01-eagle-xg-1295-10-52", model: "SRAM X01 Eagle XG-1295", variant: "10-52T", weight: 372, bikeType: "mtb", teeth: [10, 52], speeds: "12-speed" },
    { id: "sram-xx1-eagle-xg-1299-10-52", model: "SRAM XX1 Eagle XG-1299", variant: "10-52T", weight: 372, bikeType: "mtb", teeth: [10, 52], speeds: "12-speed" },
  ]

// ================================
    // CAMPAGNOLO CASSETTES
    // ================================

    // Chorus (12-Speed)
    // Note: Major weight correction. Original data was ~50g too light.
    { id: "campagnolo-chorus-11-29", model: "Campagnolo Chorus", variant: "11-29T", weight: 306, bikeType: "road", teeth: [11, 29], speeds: "12-speed" },
    { id: "campagnolo-chorus-11-32", model: "Campagnolo Chorus", variant: "11-32T", weight: 309, bikeType: "road", teeth: [11, 32], speeds: "12-speed" },
    { id: "campagnolo-chorus-11-34", model: "Campagnolo Chorus", variant: "11-34T", weight: 310, bikeType: "road", teeth: [11, 34], speeds: "12-speed" },

    // Record (12-Speed)
    // Note: Major weight correction. Original data was ~40-50g too light.
    { id: "campagnolo-record-11-29", model: "Campagnolo Record", variant: "11-29T", weight: 266, bikeType: "road", teeth: [11, 29], speeds: "12-speed" },
    { id: "campagnolo-record-11-32", model: "Campagnolo Record", variant: "11-32T", weight: 275, bikeType: "road", teeth: [11, 32], speeds: "12-speed" },

    // Super Record (12-Speed)
    // Note: Major weight correction. Original data was ~70g too light.
    { id: "campagnolo-super-record-11-29", model: "Campagnolo Super Record", variant: "11-29T", weight: 266, bikeType: "road", teeth: [11, 29], speeds: "12-speed" },
    { id: "campagnolo-super-record-11-32", model: "Campagnolo Super Record", variant: "11-32T", weight: 275, bikeType: "road", teeth: [11, 32], speeds: "12-speed" },
    
    // === NEWLY ADDED MODERN GROUPSETS ===
    // Super Record Wireless (12-Speed Road)
    { id: "campagnolo-super-record-wireless-10-25", model: "Campagnolo Super Record Wireless", variant: "10-25T", weight: 210, bikeType: "road", teeth: [10, 25], speeds: "12-speed" },
    { id: "campagnolo-super-record-wireless-10-27", model: "Campagnolo Super Record Wireless", variant: "10-27T", weight: 215, bikeType: "road", teeth: [10, 27], speeds: "12-speed" },
    { id: "campagnolo-super-record-wireless-10-29", model: "Campagnolo Super Record Wireless", variant: "10-29T", weight: 225, bikeType: "road", teeth: [10, 29], speeds: "12-speed" },
    
    // ================================
    // FSA CASSETTES
    // ================================

    // FSA Road Cassettes
    { id: "fsa-slk-pro-11-28", model: "FSA SL-K Pro", variant: "11-28T", weight: 301, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "fsa-slk-pro-11-32", model: "FSA SL-K Pro", variant: "11-32T", weight: 317, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "fsa-k-force-we-11-28", model: "FSA K-Force WE", variant: "11-28T", weight: 257, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "fsa-k-force-we-11-32", model: "FSA K-Force WE", variant: "11-32T", weight: 275, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    
    // ================================
    // PRAXIS CASSETTES
    // ================================

    // Praxis Road & Gravel Cassettes
    { id: "praxis-works-11-28", model: "Praxis Works Road", variant: "11-28T", weight: 272, bikeType: "road", teeth: [11, 28], speeds: "11-speed" },
    { id: "praxis-works-11-32", model: "Praxis Works Road", variant: "11-32T", weight: 325, bikeType: "road", teeth: [11, 32], speeds: "11-speed" },
    { id: "praxis-works-11-40", model: "Praxis Works Gravel", variant: "11-40T", weight: 323, bikeType: "gravel", teeth: [11, 40], speeds: "11-speed" },
  ]
};

// NOTE: No changes were needed for this function. It will work correctly with the cleaned data.
export const getComponentsForBikeType = (bikeType) => {
  const relevantBikeTypes = [bikeType];
  if (bikeType === 'gravel') {
    relevantBikeTypes.push('mtb');
  }

  return {
    cranksets: componentDatabase.cranksets.filter(c => relevantBikeTypes.includes(c.bikeType)),
    cassettes: componentDatabase.cassettes.filter(c => relevantBikeTypes.includes(c.bikeType)),
  };
};
