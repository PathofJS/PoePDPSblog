document.addEventListener("DOMContentLoaded", function() {
  // DOM Elements
  const wepName = document.querySelector('.wepName');
  const baseImg = document.getElementById("baseImg");
  baseImg.src = 'https://raw.githubusercontent.com/PathofJS/poepdps/refs/heads/main/img/stone.png'; // Initial image
  const selBase = document.getElementById("selBase");
  const inpBaseMin = document.getElementById("inpBaseMin");
  const inpBaseMax = document.getElementById("inpBaseMax");
  const selFlat = document.getElementById("selFlat");
  const inpFlatMin = document.getElementById("inpFlatMin");
  const inpFlatMax = document.getElementById("inpFlatMax");
  const displayTierValues = document.getElementById("displayTierValues");
  const selPhys = document.getElementById("selPhys");
  const inpPhys = document.getElementById("inpPhys");
  const selHyb = document.getElementById("selHyb");
  const inpHyb = document.getElementById("inpHyb");
  const selSpeed = document.getElementById("selSpeed");
  const inpSpeed = document.getElementById("inpSpeed");
  const selCrit = document.getElementById("selCrit");
  const inpCrit = document.getElementById("inpCrit");
  const totalMin = document.getElementById("totalMin");
  const totalMax = document.getElementById("totalMax");
  const wepAps = document.getElementById("wepAps");
  const inpQual = document.getElementById("inpQual");
  const wepQual = document.getElementById("wepQual");
  const basePdps = document.getElementById("basePdps");
  const selEnch = document.getElementById("selEnch");
  const inpBaseAps = document.getElementById("inpBaseAps");
  const inpEnch1 = document.getElementById("inpEnch1");
  const selSynthFlat = document.getElementById("selSynthFlat");
  const inpSynthFlatMin = document.getElementById("inpSynthFlatMin"); 
  const inpSynthFlatMax = document.getElementById("inpSynthFlatMax");
  const selSynthPhys = document.getElementById("selSynthPhys");
  const inpSynthPhys = document.getElementById("inpSynthPhys");
  const selSynthSpeed = document.getElementById("selSynthSpeed");
  const inpSynthSpeed = document.getElementById("inpSynthSpeed");
  const wepEnch = document.getElementById("wepEnch"); // Enchantment line
  const wepSynth1 = document.getElementById("wepSynth1"); // Synth flat
  const wepSynth2 = document.getElementById("wepSynth2"); // Synth phys
  const wepSynth3 = document.getElementById("wepSynth3"); // Synth speed
  const wepPrf1 = document.getElementById("wepPrf1"); // Flat Physical
  const wepPrf2 = document.getElementById("wepPrf2"); // Physical % + Hybrid %
  const wepPrf3 = document.getElementById("wepPrf3"); // Unused
  const wepSuf1 = document.getElementById("wepSuf1"); // Attack Speed %
  const wepSuf2 = document.getElementById("wepSuf2"); // Crit %
  const wepSuf3 = document.getElementById("wepSuf3"); // Unused

  // Set initial weapon name
  wepName.textContent = "Stone Axe"; // Initial name

// Base URL for your GitHub images
const githubBaseUrl = 'https://raw.githubusercontent.com/PathofJS/poepdps/refs/heads/main/';

// Array of image paths to be preloaded
const imgPaths = [
  'img/karui.png', 'img/vaal.png', 'img/flesh.png', 'img/despot.png', 'img/void.png',
  'img/talon.png', 'img/ezom.png', 'img/abyss.png', 'img/apex.png', 'img/sunder.png',
  'img/labrys.png', 'img/noble.png', 'img/heads.png', 'img/honed.png', 'img/jasper.png',
  'img/dagger.png', 'img/timber.png', 'img/shadow.png', 'img/gilded.png', 'img/prime.png',
  'img/double.png', 'img/pole.png', 'img/woods.png', 'img/jade.png', 'img/stone.png'
];

// Function to preload images
function preloadImages(imgPaths) {
  imgPaths.forEach(path => {
    const img = new Image();
    // Prepend the base URL here
    img.src = githubBaseUrl + path;
  });
}

// Call the preload function
preloadImages(imgPaths);

  // ARRAYS
  const axeBases = {
    basewep: { min: 0, max: 0, baseAps: 0, critc: 0, wrange: 0 },
    karui: { min: 121, max: 189, baseAps: 1.05, critc: 5, wrange: 1.3 },
    vaal: { min: 104, max: 174, baseAps: 1.15, critc: 5, wrange: 1.3 },
    flesh: { min: 97, max: 152, baseAps: 1.2, critc: 5, wrange: 13 },
    despot: { min: 90, max: 122, baseAps: 1.4, critc: 5, wrange: 1.3 },
    void: { min: 96, max: 144, baseAps: 1.25, critc: 6, wrange: 1.3 },
    talon: { min: 88, max: 138, baseAps: 1.2, critc: 5, wrange: 1.3 },
    ezom: { min: 87, max: 131, baseAps: 1.35, critc: 5.7, wrange: 1.3 },
    abyss: { min: 81, max: 121, baseAps: 1.25, critc: 5, wrange: 1.3 },
    apex: { min: 78, max: 121, baseAps: 1.35, critc: 5, wrange: 1.3 },
    sunder: { min: 74, max: 155, baseAps: 1.3, critc: 5, wrange: 1.3 },
    labrys: { min: 74, max: 123, baseAps: 1.2, critc: 5, wrange: 1.3 },
    noble: { min: 76, max: 103, baseAps: 1.3, critc: 5, wrange: 1.3 },
    heads: { min: 61, max: 92, baseAps: 1.3, critc: 5, wrange: 1.3 },
    honed: { min: 60, max: 95, baseAps: 1.35, critc: 5, wrange: 1.3 },
    jasper: { min: 58, max: 91, baseAps: 1.15, critc: 5, wrange: 1.3 },
    dagger: { min: 53, max: 83, baseAps: 1.2, critc: 5, wrange: 1.3 },
    timber: { min: 48, max: 99, baseAps: 1.25, critc: 5, wrange: 1.3 },
    shadow: { min: 49, max: 73, baseAps: 1.25, critc: 5, wrange: 1.3 },
    gilded: { min: 43, max: 58, baseAps: 1.3, critc: 5, wrange: 1.3 },
    prime: { min: 39, max: 61, baseAps: 1.35, critc: 5, wrange: 1.3 },
    double: { min: 36, max: 60, baseAps: 1.25, critc: 5, wrange: 1.3 },
    pole: { min: 29, max: 43, baseAps: 1.3, critc: 5, wrange: 1.3 },
    woods: { min: 19, max: 39, baseAps: 1.3, critc: 5, wrange: 1.3 },
    jade: { min: 19, max: 30, baseAps: 1.25, critc: 5, wrange: 1.3 },
    stone: { min: 12, max: 20, baseAps: 1.3, critc: 5, wrange: 1.3 }
  };

  const tiersFlat = {
    0: { min1: 0, max1: 0, min2: 0, max2: 0 },
    1: { min1: 34, max1: 47, min2: 72, max2: 84 },
    2: { min1: 30, max1: 40, min2: 63, max2: 73 },
    3: { min1: 25, max1: 33, min2: 52, max2: 61 },
    4: { min1: 20, max1: 28, min2: 43, max2: 51 },
    5: { min1: 16, max1: 22, min2: 35, max2: 40 },
    6: { min1: 13, max1: 17, min2: 28, max2: 32 },
    7: { min1: 10, max1: 13, min2: 21, max2: 25 },
    8: { min1: 6, max1: 8, min2: 12, max2: 15 },
    9: { min1: 2, max1: 2, min2: 4, max2: 5 }
  };

  const tiersPhys = {
    10: { min: 139, max: 139 },
    9: { min: 129, max: 129 },
    8: { min: 40, max: 49 },
    7: { min: 50, max: 64 },
    6: { min: 65, max: 84 },
    5: { min: 85, max: 109 },
    4: { min: 110, max: 134 },
    3: { min: 135, max: 154 },
    2: { min: 155, max: 169 },
    1: { min: 170, max: 179 },
    0: { min: 0, max: 0 }
  };

  const tiersHyb = {
    8: { min: 15, max: 19 },
    7: { min: 20, max: 24 },
    6: { min: 25, max: 34 },
    5: { min: 35, max: 44 },
    4: { min: 45, max: 54 },
    3: { min: 55, max: 64 },
    2: { min: 65, max: 74 },
    1: { min: 75, max: 79 },
    0: { min: 0, max: 0 }
  };

  const tiersSpeed = {
    9: { min: 0, max: 0 },
    8: { min: 5, max: 7 },
    7: { min: 8, max: 10 },
    6: { min: 11, max: 13 },
    5: { min: 14, max: 16 },
    4: { min: 17, max: 19 },
    3: { min: 20, max: 22 },
    2: { min: 23, max: 25 },
    1: { min: 26, max: 27 },
    0: { min: 28, max: 30 }
  };

  const tiersCrit = {
    0: { min: 0, max: 0 },
    1: { min: 35, max: 38 },
    2: { min: 30, max: 34 },
    3: { min: 25, max: 29 },
    4: { min: 25, max: 27 },
    5: { min: 20, max: 24 },
    6: { min: 20, max: 24 },
    7: { min: 17, max: 19 },
    8: { min: 15, max: 19 },
    9: { min: 10, max: 14 }
  };

  const tiersEnch = [
    { physMods: 6 },
    { physMods: 8 },
    { physMods: 10 },
    { physMods: 15 },
    { speedMods: 6 },
    { speedMods: 8 },
    { speedMods: 10 },
    { speedMods: 12 },
    { speedMods: 15 },
    { physMods: 6, speedMods: 6 },
    { physMods: 6, critMods: 6 },
    { physHybBonus: { min: 10, max: 15 } },
    { physHybBonus: { min: 16, max: 20 } },
    { physHybBonus: { min: 21, max: 25 } }
  ];

  const tiersSynthFlat = {
    0: { min1: 0, max1: 0, min2: 0, max2: 0 },
    1: { min1: 1, max1: 1, min2: 2, max2: 3 },
    2: { min1: 2, max1: 3, min2: 4, max2: 5 },
    3: { min1: 4, max1: 5, min2: 6, max2: 7 },
    4: { min1: 6, max1: 7, min2: 8, max2: 10 },
    5: { min1: 8, max1: 9, min2: 11, max2: 13 }
  };

  const tiersSynthPhys = {
    0: { min: 0, max: 0 },
    1: { min: 13, max: 14 },
    2: { min: 15, max: 16 },
    3: { min: 17, max: 19 },
    4: { min: 20, max: 22 },
    5: { min: 23, max: 25 }
  };

  const tiersSynthSpeed = {
    0: { min: 0, max: 0 },
    1: { min: 3, max: 4 },
    2: { min: 5, max: 6 },
    3: { min: 7, max: 8 }
  };

  // Function to generate enchantment description
  function getEnchantDescription(enchant) {
    if (!enchant) return "No Enchantment";
    let description = [];
    if (enchant.physMods) {
      description.push(`${enchant.physMods}% increased magnitudes of Physical mods`);
    }
    if (enchant.speedMods) {
      description.push(`${enchant.speedMods}% increased Attack Speed`);
    }
    if (enchant.critMods) {
      description.push(`${enchant.critMods}% increased Critical Strike Chance`);
    }
    if (enchant.physHybBonus) {
      description.push(`${enchant.physHybBonus.min}-${enchant.physHybBonus.max}% increased Physical and Hybrid Damage`);
    }
    return description.join(" and ") || "No Enchantment";
  }

  // Function to generate synth flat description
  function getSynthFlatDescription(tier) {
    const synthData = tiersSynthFlat[tier];
    if (!synthData || (synthData.min1 === 0 && synthData.min2 === 0)) {
      return "No Modifier";
    }
    return `Adds ${synthData.min1}-${synthData.max1} to ${synthData.min2}-${synthData.max2} Physical Damage`;
  }

  // Function to generate synth phys description
  function getSynthPhysDescription(tier) {
    const synthData = tiersSynthPhys[tier];
    if (!synthData || synthData.min === 0) {
      return "No Modifier";
    }
    return `${synthData.min}-${synthData.max}% increased Physical Damage`;
  }

  // Function to generate synth speed description
  function getSynthSpeedDescription(tier) {
    const synthData = tiersSynthSpeed[tier];
    if (!synthData || synthData.min === 0) {
      return "No Modifier";
    }
    return `${synthData.min}-${synthData.max}% increased Attack Speed`;
  }

  // Function to generate flat physical affix description
  function getFlatAffixDescription() {
    const min = parseFloat(inpFlatMin.value) || 0;
    const max = parseFloat(inpFlatMax.value) || 0;
    if (min === 0 && max === 0) return "";
    return `${min}-${max} added Physical`;
  }

  // Function to generate combined physical % affix description
  function getPhysAffixDescription() {
    const phys = parseFloat(inpPhys.value) || 0;
    const hyb = parseFloat(inpHyb.value) || 0;
    const total = phys + hyb;
    if (total === 0) return "";
    return `${total}% increased Physical Damage`;
  }

  // Function to generate attack speed % affix description
  function getSpeedAffixDescription() {
    const value = parseFloat(inpSpeed.value) || 0;
    if (value === 0) return "";
    return `${value}% increased Attack Speed`;
  }

  // Function to generate crit % affix description
  function getCritAffixDescription() {
    const value = parseFloat(inpCrit.value) || 0;
    if (value === 0) return "";
    return `${value}% increased Critical Chance`;
  }

  // Function to update all modifier displays
  function updateModifierDisplays() {
    console.log("updateModifierDisplays called");
    console.log("Select values:", {
      selEnch: selEnch.value,
      selSynthFlat: selSynthFlat.value,
      selSynthPhys: selSynthPhys.value,
      selSynthSpeed: selSynthSpeed.value
    });

    // Clear all slots first
    if (wepEnch) wepEnch.innerText = "";
    if (wepSynth1) wepSynth1.innerText = "";
    if (wepSynth2) wepSynth2.innerText = "";
    if (wepSynth3) wepSynth3.innerText = "";
    if (wepPrf1) wepPrf1.innerText = "";
    if (wepPrf2) wepPrf2.innerText = "";
    if (wepPrf3) wepPrf3.innerText = "";
    if (wepSuf1) wepSuf1.innerText = "";
    if (wepSuf2) wepSuf2.innerText = "";
    if (wepSuf3) wepSuf3.innerText = "";

    // Assign enchantment to wepEnch
    const enchantIndex = parseInt(selEnch.value) || 0;
    const enchantText = enchantIndex === 0 ? "No Enchantment" : getEnchantDescription(tiersEnch[enchantIndex]);
    if (wepEnch) wepEnch.innerText = enchantText;
    console.log("Enchant Text:", enchantText, "wepEnch set to:", wepEnch?.innerText);

    // Assign synthesized mods to wepSynth1, wepSynth2, wepSynth3
    const synthFlatTier = parseInt(selSynthFlat.value) || 0;
    const synthFlatText = getSynthFlatDescription(synthFlatTier);
    if (wepSynth1) wepSynth1.innerText = synthFlatText;
    console.log("Synth Flat Text:", synthFlatText, "wepSynth1 set to:", wepSynth1?.innerText);

    const synthPhysTier = parseInt(selSynthPhys.value) || 0;
    const synthPhysText = getSynthPhysDescription(synthPhysTier);
    if (wepSynth2) wepSynth2.innerText = synthPhysText;
    console.log("Synth Phys Text:", synthPhysText, "wepSynth2 set to:", wepSynth2?.innerText);

    const synthSpeedTier = parseInt(selSynthSpeed.value) || 0;
    const synthSpeedText = getSynthSpeedDescription(synthSpeedTier);
    if (wepSynth3) wepSynth3.innerText = synthSpeedText;
    console.log("Synth Speed Text:", synthSpeedText, "wepSynth3 set to:", wepSynth3?.innerText);

    // Assign prefixes to wepPrf1, wepPrf2
    const flatAffixText = getFlatAffixDescription();
    if (wepPrf1 && flatAffixText) wepPrf1.innerText = flatAffixText;
    console.log("Flat Affix Text:", flatAffixText, "wepPrf1 set to:", wepPrf1?.innerText);

    const physAffixText = getPhysAffixDescription();
    if (wepPrf2 && physAffixText) wepPrf2.innerText = physAffixText;
    console.log("Phys Affix Text:", physAffixText, "wepPrf2 set to:", wepPrf2?.innerText);

    // Assign suffixes to wepSuf1, wepSuf2
    const speedAffixText = getSpeedAffixDescription();
    if (wepSuf1 && speedAffixText) wepSuf1.innerText = speedAffixText;
    console.log("Speed Affix Text:", speedAffixText, "wepSuf1 set to:", wepSuf1?.innerText);

    const critAffixText = getCritAffixDescription();
    if (wepSuf2 && critAffixText) wepSuf2.innerText = critAffixText;
    console.log("Crit Affix Text:", critAffixText, "wepSuf2 set to:", wepSuf2?.innerText);
  }

  // Populate selEnch with options from tiersEnch
  function populateSelEnch() {
    selEnch.innerHTML = '<option value="0" selected>No Enchantment</option>';
    tiersEnch.forEach((enchant, index) => {
      if (index >= 1) { // Skip index 0 to avoid duplicate
        const option = document.createElement("option");
        option.value = index;
        let label = "";
        if (enchant.physMods) label += `Phys +${enchant.physMods}%`;
        if (enchant.speedMods) label += `${label ? " & " : ""}Speed:${enchant.speedMods}%`;
        if (enchant.critMods) label += `${label ? " & " : ""}Crit:${enchant.critMods}%`;
        if (enchant.physHybBonus) label += `${label ? " & " : ""}Phys+Hyb:${enchant.physHybBonus.min}-${enchant.physHybBonus.max}%`;
        option.textContent = label || `Enchant ${index}`;
        selEnch.appendChild(option);
      }
    });
    selEnch.value = "0"; // Explicitly set to "No Enchantment"
  }

  // Populate selSynthFlat with options from tiersSynthFlat
  function populateSelSynthFlat() {
    selSynthFlat.innerHTML = '<option value="0" selected>No Modifier</option>';
    Object.keys(tiersSynthFlat).forEach(tier => {
      if (tier !== "0") {
        const synthData = tiersSynthFlat[tier];
        const option = document.createElement("option");
        option.value = tier;
        let label = synthData.min1 > 0 || synthData.min2 > 0 ? `Adds ${synthData.min1}-${synthData.max1} to ${synthData.min2}-${synthData.max2} Phys` : "No Modifier";
        option.textContent = label;
        selSynthFlat.appendChild(option);
      }
    });
    selSynthFlat.value = "0";
    updateInpSynthFlatTier(0);
  }

  // Populate selSynthPhys with options from tiersSynthPhys
  function populateSelSynthPhys() {
    selSynthPhys.innerHTML = '<option value="0" selected>No Modifier</option>';
    Object.keys(tiersSynthPhys).forEach(tier => {
      if (tier !== "0") {
        const synthData = tiersSynthPhys[tier];
        const option = document.createElement("option");
        option.value = tier;
        let label = synthData.min > 0 ? `${synthData.min}-${synthData.max}% inc Phys` : "No Modifier";
        option.textContent = label;
        selSynthPhys.appendChild(option);
      }
    });
    selSynthPhys.value = "0";
    updateInpSynthPhysTier(0);
  }

  // Populate selSynthSpeed with options from tiersSynthSpeed
  function populateSelSynthSpeed() {
    selSynthSpeed.innerHTML = '<option value="0" selected>No Modifier</option>';
    Object.keys(tiersSynthSpeed).forEach(tier => {
      if (tier !== "0") {
        const synthData = tiersSynthSpeed[tier];
        const option = document.createElement("option");
        option.value = tier;
        let label = synthData.min > 0 ? `${synthData.min}-${synthData.max}% inc Speed` : "No Modifier";
        option.textContent = label;
        selSynthSpeed.appendChild(option);
      }
    });
    selSynthSpeed.value = "0";
    updateInpSynthSpeedTier(0);
  }

  // Function to apply enchant modifiers to input fields
  function applyEnchantModifiers() {
    const selectedIndex = parseInt(selEnch.value) || 0;
    const flatTier = parseInt(selFlat.value) || 0;
    const flatData = tiersFlat[flatTier] || { min1: 0, max1: 0, min2: 0, max2: 0 };
    let flatMinValue = flatData.max1;
    let flatMaxValue = flatData.max2;

    const physTier = parseInt(selPhys.value) || 0;
    const physData = tiersPhys[physTier] || { min: 0, max: 0 };
    let physValue = physData.max;

    const hybTier = parseInt(selHyb.value) || 0;
    const hybData = tiersHyb[hybTier] || { min: 0, max: 0 };
    let hybValue = hybData.max;

    const speedTier = parseInt(selSpeed.value) || 0;
    const speedData = tiersSpeed[speedTier] || { min: 0, max: 0 };
    let speedValue = speedData.max;

    const critTier = parseInt(selCrit.value) || 0;
    const critData = tiersCrit[critTier] || { min: 0, max: 0 };
    let critValue = critData.max;

    // Handle "No Enchantment" case
    if (selectedIndex === 0) {
      if (wepEnch) wepEnch.innerText = "No Enchantment";
      inpFlatMin.value = flatMinValue;
      inpFlatMax.value = flatMaxValue;
      inpPhys.value = physValue;
      inpHyb.value = hybValue;
      inpSpeed.value = speedValue;
      inpCrit.value = critValue;
      inpEnch1.value = 0;
      inpEnch1.min = 0;
      inpEnch1.max = 0;
      return;
    }

    // Handle valid enchantments (index >= 1)
    const selectedEnchant = tiersEnch[selectedIndex];
    if (wepEnch) wepEnch.innerText = getEnchantDescription(selectedEnchant);

    // Handle physHybBonus for inpEnch1
    if (selectedEnchant.physHybBonus) {
      const bonusMin = selectedEnchant.physHybBonus.min;
      const bonusMax = selectedEnchant.physHybBonus.max;
      inpEnch1.min = bonusMin;
      inpEnch1.max = bonusMax;
      const currentEnchValue = parseFloat(inpEnch1.value) || 0;
      if (currentEnchValue < bonusMin || currentEnchValue > bonusMax) {
        inpEnch1.value = bonusMax;
      }
    } else {
      inpEnch1.value = 0;
      inpEnch1.min = 0;
      inpEnch1.max = 0;
    }

    // Apply enchant modifiers
    if (selectedEnchant.physMods) {
      const physMultiplier = 1 + (selectedEnchant.physMods / 100);
      flatMinValue = Math.round(flatMinValue * physMultiplier);
      flatMaxValue = Math.round(flatMaxValue * physMultiplier);
      physValue = Math.round(physValue * physMultiplier);
      hybValue = Math.round(hybValue * physMultiplier);
      inpFlatMin.value = flatMinValue;
      inpFlatMax.value = flatMaxValue;
      inpPhys.value = physValue;
      inpHyb.value = hybValue;
    } else {
      inpFlatMin.value = flatMinValue;
      inpFlatMax.value = flatMaxValue;
      inpPhys.value = physValue;
      inpHyb.value = hybValue;
    }

    if (selectedEnchant.speedMods) {
      const speedMultiplier = 1 + (selectedEnchant.speedMods / 100);
      speedValue = Math.round(speedValue * speedMultiplier);
      inpSpeed.value = speedValue;
    } else {
      inpSpeed.value = speedValue;
    }

    if (selectedEnchant.critMods) {
      const critMultiplier = 1 + (selectedEnchant.critMods / 100);
      critValue = Math.round(critValue * critMultiplier);
      inpCrit.value = critValue;
    } else {
      inpCrit.value = critValue;
    }
  }

  // Function to update base inputs when tier changes
  function updateInpBase(tier) {
    const tierData = axeBases[tier];
    if (tierData) {
      inpBaseMin.value = tierData.min;
      inpBaseMax.value = tierData.max;
      inpBaseAps.value = tierData.baseAps.toFixed(2);
    } else {
      console.error("Invalid base tier selected:", tier);
      inpBaseMin.value = 0;
      inpBaseMax.value = 0;
      inpBaseAps.value = 0;
    }
  }

  // Function to update flat damage inputs when tier changes
  function updateInpFlatTier(tier) {
    const tierData = tiersFlat[tier];
    if (tierData) {
      inpFlatMin.min = tierData.min1;
      inpFlatMin.max = tierData.max1;
      inpFlatMin.value = tierData.max1;
      inpFlatMax.min = tierData.min2;
      inpFlatMax.max = tierData.max2;
      inpFlatMax.value = tierData.max2;
      displayTierValues.style.display = "none";
    } else {
      console.error("Invalid flat tier selected:", tier);
      displayTierValues.style.display = "none";
    }
  }

  // Function to update physical damage % inputs when tier changes
  function updateInpPhysTier(tier) {
    const tierData = tiersPhys[tier];
    if (tierData) {
      inpPhys.min = tierData.min;
      inpPhys.max = tierData.max;
      inpPhys.value = tierData.max;
      displayTierValues.style.display = "none";
    } else {
      console.error("Invalid Phys tier selected:", tier);
      displayTierValues.style.display = "none";
    }
  }

  // Function to update hybrid damage % inputs when tier changes
  function updateInpHybTier(tier) {
    const tierData = tiersHyb[tier];
    if (tierData) {
      inpHyb.min = tierData.min;
      inpHyb.max = tierData.max;
      inpHyb.value = tierData.max;
      displayTierValues.style.display = "none";
    } else {
      console.error("Invalid Hyb tier selected:", tier);
      displayTierValues.style.display = "none";
    }
  }

  // Function to update speed % inputs when tier changes
  function updateInpSpeedTier(tier) {
    const tierData = tiersSpeed[tier];
    if (tierData) {
      inpSpeed.min = tierData.min;
      inpSpeed.max = tierData.max;
      inpSpeed.value = Math.round(tierData.max);
    } else {
      console.error("Invalid Speed tier selected:", tier);
    }
  }

  // Function to update crit % inputs when tier changes
  function updateInpCritTier(tier) {
    const tierData = tiersCrit[tier];
    if (tierData) {
      inpCrit.min = tierData.min;
      inpCrit.max = tierData.max;
      inpCrit.value = Math.round(tierData.max);
    } else {
      console.error("Invalid Crit tier selected:", tier);
    }
  }

  // Function to update synthesized flat damage inputs when tier changes
  function updateInpSynthFlatTier(tier) {
    const tierData = tiersSynthFlat[tier];
    if (tierData) {
      inpSynthFlatMin.min = tierData.min1;
      inpSynthFlatMin.max = tierData.max1;
      inpSynthFlatMin.value = tierData.max1;
      inpSynthFlatMax.min = tierData.min2;
      inpSynthFlatMax.max = tierData.max2;
      inpSynthFlatMax.value = tierData.max2;
    } else {
      console.error("Invalid Synth Flat tier selected:", tier);
      inpSynthFlatMin.value = 0;
      inpSynthFlatMax.value = 0;
    }
  }

  // Function to update synthesized phys % inputs when tier changes
  function updateInpSynthPhysTier(tier) {
    const tierData = tiersSynthPhys[tier] || { min: 0, max: 0 };
    inpSynthPhys.min = tierData.min;
    inpSynthPhys.max = tierData.max;
    inpSynthPhys.value = tierData.max;
    console.log("Synth Phys Tier:", tier, "inpSynthPhys.value:", inpSynthPhys.value);
  }

  // Function to update synthesized speed % inputs when tier changes
  function updateInpSynthSpeedTier(tier) {
    const tierData = tiersSynthSpeed[tier];
    if (tierData) {
      inpSynthSpeed.min = tierData.min;
      inpSynthSpeed.max = tierData.max;
      inpSynthSpeed.value = tierData.max;
    } else {
      console.error("Invalid Synth Speed tier selected:", tier);
      inpSynthSpeed.value = 0;
    }
  }

  // Function to calculate and update total damage values
  function updateTotalValues() {
    try {
      const baseTier = selBase.value;
      const baseData = axeBases[baseTier] || { min: 0, max: 0, baseAps: 0, critc: 0 };
      let baseMinValue = parseFloat(inpBaseMin.value) || baseData.min;
      let baseMaxValue = parseFloat(inpBaseMax.value) || baseData.max;

      const flatTier = parseInt(selFlat.value) || 0;
      const flatData = tiersFlat[flatTier] || { min1: 0, max1: 0, min2: 0, max2: 0 };
      const flatMinValue = parseFloat(inpFlatMin.value) || flatData.max1;
      const flatMaxValue = parseFloat(inpFlatMax.value) || flatData.max2;

      const physTier = parseInt(selPhys.value) || 0;
      const physData = tiersPhys[physTier] || { min: 0, max: 0 };
      const physValue = parseFloat(inpPhys.value) || physData.max;

      const hybTier = parseInt(selHyb.value) || 0;
      const hybData = tiersHyb[hybTier] || { min: 0, max: 0 };
      const hybValue = parseFloat(inpHyb.value) || hybData.max;

      const speedTier = parseInt(selSpeed.value) || 0;
      const speedData = tiersSpeed[speedTier] || { min: 0, max: 0 };
      let speedValue = parseFloat(inpSpeed.value) || speedData.max;

      const critTier = parseInt(selCrit.value) || 0;
      const critData = tiersCrit[critTier] || { min: 0, max: 0 };
      const critValue = parseFloat(inpCrit.value) || critData.max;

      const incQual = parseFloat(inpQual.value) || 0;
      const qualityMultiplier = 1 + (incQual / 100);

      const synthFlatTier = parseInt(selSynthFlat.value) || 0;
      const synthFlatData = tiersSynthFlat[synthFlatTier] || { min1: 0, max1: 0, min2: 0, max2: 0 };
      const synthFlatMinValue = parseFloat(inpSynthFlatMin.value) || synthFlatData.max1;
      const synthFlatMaxValue = parseFloat(inpSynthFlatMax.value) || synthFlatData.max2;

      const synthPhysTier = parseInt(selSynthPhys.value) || 0;
      const synthPhysData = tiersSynthPhys[synthPhysTier] || { min: 0, max: 0 };
      const synthPhysValue = parseFloat(inpSynthPhys.value) || synthPhysData.max;

      const synthSpeedTier = parseInt(selSynthSpeed.value) || 0;
      const synthSpeedData = tiersSynthSpeed[synthSpeedTier] || { min: 0, max: 0 };
      const synthSpeedValue = parseFloat(inpSynthSpeed.value) || synthSpeedData.max;

      const selectedIndex = parseInt(selEnch.value) || 0;
      let enchBonus = 0;
      if (selectedIndex !== 0 && tiersEnch[selectedIndex] && tiersEnch[selectedIndex].physHybBonus) {
        const bonusMin = tiersEnch[selectedIndex].physHybBonus.min;
        const bonusMax = tiersEnch[selectedIndex].physHybBonus.max;
        enchBonus = parseFloat(inpEnch1.value) || 0;
        enchBonus = Math.max(bonusMin, Math.min(bonusMax, enchBonus));
      }

      let totalTierValue = physValue + hybValue + synthPhysValue;

      if (enchBonus > 0) {
        if (physValue === 0 && hybValue === 0 && synthPhysValue === 0) {
          const bonusMultiplier = 1 + (enchBonus / 100);
          baseMinValue = Math.round(baseMinValue * bonusMultiplier);
          baseMaxValue = Math.round(baseMaxValue * bonusMultiplier);
        } else {
          totalTierValue += enchBonus;
        }
      }

      let minTotal = baseMinValue + flatMinValue + synthFlatMinValue;
      let maxTotal = baseMaxValue + flatMaxValue + synthFlatMaxValue;

      const tierMultiplier = 1 + (totalTierValue / 100);
      minTotal *= tierMultiplier;
      maxTotal *= tierMultiplier;

      minTotal = Math.round(minTotal * qualityMultiplier);
      maxTotal = Math.round(maxTotal * qualityMultiplier);

      totalMin.innerText = minTotal;
      totalMax.innerText = maxTotal;
      wepQual.innerText = incQual;

      const baseAps = parseFloat(baseData.baseAps) || 0;
      if (!isNaN(baseAps) && baseAps > 0) {
        const totalSpeedValue = speedValue + synthSpeedValue;
        const totalAps = baseAps * (1 + (totalSpeedValue / 100));
        wepAps.innerText = totalAps.toFixed(2);
      } else {
        wepAps.innerText = "Base not selected";
        inpBaseAps.value = 0;
      }

      if (document.getElementById("wepCrit")) {
        const baseCritChance = baseData.critc || 0;
        const totalCritChance = baseCritChance * (1 + (critValue / 100));
        document.getElementById("wepCrit").innerText = totalCritChance.toFixed(2) + "%";
      }
    } catch (error) {
      console.error("Error in updateTotalValues:", error);
      totalMin.innerText = "Error";
      totalMax.innerText = "Error";
      wepAps.innerText = "Error";
      basePdps.innerText = "0";
    }
  }

  // Function to calculate and update DPS
  function updatePdps() {
    const minPdps = parseFloat(totalMin.innerText) || 0;
    const maxPdps = parseFloat(totalMax.innerText) || 0;
    const aps = parseFloat(wepAps.innerText) || 0;
    const finalDPS = Math.round(((minPdps + maxPdps) / 2) * aps);
    basePdps.innerText = isNaN(finalDPS) ? "0" : finalDPS;
  }

  // Call the populate functions and initial updates on load
  populateSelEnch();
  populateSelSynthFlat();
  populateSelSynthPhys();
  populateSelSynthSpeed();
  applyEnchantModifiers();
  updateModifierDisplays();
  updateTotalValues();
  updatePdps();

selBase.addEventListener("change", () => {
  const selectedBase = selBase.value;
  updateInpBase(selectedBase);
  // Prepend the base URL here as well
  baseImg.src = `${githubBaseUrl}img/${selectedBase}.png`;
  wepName.textContent = selBase.options[selBase.selectedIndex].text;
  applyEnchantModifiers();
  updateModifierDisplays();
  updateTotalValues();
  updatePdps();
});

  selFlat.addEventListener("change", () => {
    const selectedTier = parseInt(selFlat.value) || 0;
    updateInpFlatTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selPhys.addEventListener("change", () => {
    const selectedTier = parseInt(selPhys.value) || 0;
    updateInpPhysTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selHyb.addEventListener("change", () => {
    const selectedTier = parseInt(selHyb.value) || 0;
    updateInpHybTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selSpeed.addEventListener("change", () => {
    const selectedTier = parseInt(selSpeed.value) || 0;
    updateInpSpeedTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selCrit.addEventListener("change", () => {
    const selectedTier = parseInt(selCrit.value) || 0;
    updateInpCritTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selEnch.addEventListener("change", () => {
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selSynthFlat.addEventListener("change", () => {
    const selectedTier = parseInt(selSynthFlat.value) || 0;
    updateInpSynthFlatTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selSynthPhys.addEventListener("change", () => {
    const selectedTier = parseInt(selSynthPhys.value) || 0;
    updateInpSynthPhysTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  selSynthSpeed.addEventListener("change", () => {
    const selectedTier = parseInt(selSynthSpeed.value) || 0;
    updateInpSynthSpeedTier(selectedTier);
    applyEnchantModifiers();
    updateModifierDisplays();
    updateTotalValues();
    updatePdps();
  });

  // Event listeners for input changes
  const inputElements = [
    inpFlatMin, inpFlatMax, inpBaseMin, inpBaseMax,
    inpPhys, inpHyb, inpSpeed, inpQual, inpCrit, inpEnch1,
    inpSynthFlatMin, inpSynthFlatMax, inpSynthPhys, inpSynthSpeed
  ];

  inputElements.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        console.log(`Input changed: ${input.id} = ${input.value}`);
        if (input.id === "inpSynthPhys") {
          const tier = parseInt(selSynthPhys.value) || 0;
          const tierData = tiersSynthPhys[tier] || { min: 0, max: 0 };
          if (parseFloat(input.value) > tierData.max || parseFloat(input.value) < tierData.min) {
            input.value = tierData.max;
          }
        }
        updateModifierDisplays();
        updateTotalValues();
        updatePdps();
      });
    }
  });
});
