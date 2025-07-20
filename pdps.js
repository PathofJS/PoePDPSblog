const githubBaseUrl = 'https://raw.githubusercontent.com/PathofJS/poepdps/refs/heads/main/';

let pdpsData = {}; // Global variable to store loaded JSON data

document.addEventListener("DOMContentLoaded", async function() {
  const wepName = document.querySelector('.wepName');
  const baseImg = document.getElementById("baseImg");
  baseImg.src = githubBaseUrl + 'img/stone.png';
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
  const wepEnch = document.getElementById("wepEnch");
  const wepSynth1 = document.getElementById("wepSynth1");
  const wepSynth2 = document.getElementById("wepSynth2");
  const wepSynth3 = document.getElementById("wepSynth3");
  const wepPrf1 = document.getElementById("wepPrf1");
  const wepPrf2 = document.getElementById("wepPrf2");
  const wepPrf3 = document.getElementById("wepPrf3");
  const wepSuf1 = document.getElementById("wepSuf1");
  const wepSuf2 = document.getElementById("wepSuf2");
  const wepSuf3 = document.getElementById("wepSuf3");
const inpHybAS = document.getElementById("inpHybAS");
const hybAsLabel = document.getElementById("hybAsLabel");
const hybAsUnit = document.getElementById("hybAsUnit");

  wepName.textContent = "Stone Axe";


  try {
    const response = await fetch('pdps.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    pdpsData = await response.json();
  } catch (error) {
    console.error("Failed to load pdps.json:", error);
    alert("Error: Could not load data. Please ensure 'pdps.json' is available.");
    return;
  }

  preloadImages(pdpsData.imgPaths);

  function preloadImages(imgPaths) {
    imgPaths.forEach(path => {
      const img = new Image();
      img.src = githubBaseUrl + path;
    });
  }

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

  function getSynthFlatDescription(tier) {
    const synthData = pdpsData.tiersSynthFlat[tier];
    if (!synthData || (synthData.min1 === 0 && synthData.min2 === 0)) {
      return "No Modifier";
    }
    return `Adds ${synthData.min1}-${synthData.max1} to ${synthData.min2}-${synthData.max2} Physical Damage`;
  }

  function getSynthPhysDescription(tier) {
    const synthData = pdpsData.tiersSynthPhys[tier];
    if (!synthData || synthData.min === 0) {
      return "No Modifier";
    }
    return `${synthData.min}-${synthData.max}% increased Physical Damage`;
  }

  function getSynthSpeedDescription(tier) {
    const synthData = pdpsData.tiersSynthSpeed[tier];
    if (!synthData || synthData.min === 0) {
      return "No Modifier";
    }
    return `${synthData.min}-${synthData.max}% increased Attack Speed`;
  }

  function getFlatAffixDescription() {
    const min = parseFloat(inpFlatMin.value) || 0;
    const max = parseFloat(inpFlatMax.value) || 0;
    if (min === 0 && max === 0) return "";
    return `${min}-${max} added Physical`;
  }

  function getPhysAffixDescription() {
    const phys = parseFloat(inpPhys.value) || 0;
    const hyb = parseFloat(inpHyb.value) || 0;
    const total = phys + hyb;
    if (total === 0) return "";
    return `${total}% increased Physical Damage`;
  }

  function getSpeedAffixDescription() {
    const value = parseFloat(inpSpeed.value) || 0;
    if (value === 0) return "";
    return `${value}% increased Attack Speed`;
  }

  function getCritAffixDescription() {
    const value = parseFloat(inpCrit.value) || 0;
    if (value === 0) return "";
    return `${value}% increased Critical Chance`;
  }

  function updateModifierDisplays() {
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

    const enchantIndex = parseInt(selEnch.value) || 0;
    const enchantData = enchantIndex > 0 ? pdpsData.tiersEnch[enchantIndex - 1] : null;
    const enchantText = enchantIndex === 0 ? "No Enchantment" : getEnchantDescription(enchantData);
    if (wepEnch) wepEnch.innerText = enchantText;

    const synthFlatTier = parseInt(selSynthFlat.value) || 0;
    const synthFlatText = getSynthFlatDescription(synthFlatTier);
    if (wepSynth1) wepSynth1.innerText = synthFlatText;

    const synthPhysTier = parseInt(selSynthPhys.value) || 0;
    const synthPhysText = getSynthPhysDescription(synthPhysTier);
    if (wepSynth2) wepSynth2.innerText = synthPhysText;

    const synthSpeedTier = parseInt(selSynthSpeed.value) || 0;
    const synthSpeedText = getSynthSpeedDescription(synthSpeedTier);
    if (wepSynth3) wepSynth3.innerText = synthSpeedText;

    const flatAffixText = getFlatAffixDescription();
    if (wepPrf1 && flatAffixText) wepPrf1.innerText = flatAffixText;

    const physAffixText = getPhysAffixDescription();
    if (wepPrf2 && physAffixText) wepPrf2.innerText = physAffixText;

    const speedAffixText = getSpeedAffixDescription();
    if (wepSuf1 && speedAffixText) wepSuf1.innerText = speedAffixText;

    const critAffixText = getCritAffixDescription();
    if (wepSuf2 && critAffixText) wepSuf2.innerText = critAffixText;
  }

  function populateSelEnch() {
    selEnch.innerHTML = '<option value="0" selected>No Enchantment</option>';
    pdpsData.tiersEnch.forEach((enchant, index) => {
      const option = document.createElement("option");
      option.value = index + 1;
      let label = "";
      if (enchant.physMods) label += `Phys +${enchant.physMods}%`;
      if (enchant.speedMods) label += `${label ? " & " : ""}Speed:${enchant.speedMods}%`;
      if (enchant.critMods) label += `${label ? " & " : ""}Crit:${enchant.critMods}%`;
      if (enchant.physHybBonus) label += `${label ? " & " : ""}Phys+Hyb:${enchant.physHybBonus.min}-${enchant.physHybBonus.max}%`;
      option.textContent = label || `Enchant ${index + 1}`;
      selEnch.appendChild(option);
    });
    selEnch.value = "0";
  }

  function populateSelSynthFlat() {
    selSynthFlat.innerHTML = '<option value="0" selected>No Modifier</option>';
    Object.keys(pdpsData.tiersSynthFlat).forEach(tier => {
      if (tier !== "0") {
        const synthData = pdpsData.tiersSynthFlat[tier];
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

  function populateSelSynthPhys() {
    selSynthPhys.innerHTML = '<option value="0" selected>No Modifier</option>';
    Object.keys(pdpsData.tiersSynthPhys).forEach(tier => {
      if (tier !== "0") {
        const synthData = pdpsData.tiersSynthPhys[tier];
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

  function populateSelSynthSpeed() {
    selSynthSpeed.innerHTML = '<option value="0" selected>No Modifier</option>';
    Object.keys(pdpsData.tiersSynthSpeed).forEach(tier => {
      if (tier !== "0") {
        const synthData = pdpsData.tiersSynthSpeed[tier];
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

  function populateSelHyb() {
    selHyb.innerHTML = '';
    for (const key in pdpsData.tiersHyb) {
      const option = document.createElement("option");
      option.value = key;
      let label = key;
      if (pdpsData.tiersHyb[key].physDamage) {
        label = `${key}: ${pdpsData.tiersHyb[key].physDamage.min}-${pdpsData.tiersHyb[key].physDamage.max}% inc Phys`;
      }
      if (pdpsData.tiersHyb[key].as1 && pdpsData.tiersHyb[key].as2) {
        label += `, ${pdpsData.tiersHyb[key].as1}-${pdpsData.tiersHyb[key].as2}% inc AS`;
      }
      option.textContent = label;
      selHyb.appendChild(option);
    }
    selHyb.value = "No Hybrid";
    updateInpHybTier("No Hybrid");
  }

  function applyEnchantModifiers() {
    const selectedIndex = parseInt(selEnch.value) || 0;
    const selectedEnchant = selectedIndex > 0 ? pdpsData.tiersEnch[selectedIndex - 1] : null;

    const flatTier = parseInt(selFlat.value) || 0;
    const flatData = pdpsData.tiersFlat[flatTier] || { min1: 0, max1: 0, min2: 0, max2: 0 };
    let flatMinValue = flatData.max1;
    let flatMaxValue = flatData.max2;

    const physTier = parseInt(selPhys.value) || 0;
    const physData = pdpsData.tiersPhys[physTier] || { min: 0, max: 0 };
    let physValue = physData.max;

    const hybTierKey = selHyb.value;
    const hybData = pdpsData.tiersHyb[hybTierKey];
    let hybValue = (hybData && hybData.physDamage) ? hybData.physDamage.max : 0;

    const speedTier = parseInt(selSpeed.value) || 0;
    const speedData = pdpsData.tiersSpeed[speedTier] || { min: 0, max: 0 };
    let speedValue = speedData.max;

    const critTier = parseInt(selCrit.value) || 0;
    const critData = pdpsData.tiersCrit[critTier] || { min: 0, max: 0 };
    let critValue = critData.max;

    if (!selectedEnchant) {
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

    if (wepEnch) wepEnch.innerText = getEnchantDescription(selectedEnchant);

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

  function updateInpBase(tier) {
    const tierData = pdpsData.axeBases[tier];
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

  function updateInpFlatTier(tier) {
    const tierData = pdpsData.tiersFlat[tier];
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

  function updateInpPhysTier(tier) {
    const tierData = pdpsData.tiersPhys[tier];
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

function updateInpHybTier(tierKey) {
    const tierData = pdpsData.tiersHyb[tierKey];

    if (tierData && tierData.physDamage) {
        inpHyb.min = tierData.physDamage.min;
        inpHyb.max = tierData.physDamage.max;
        inpHyb.value = tierData.physDamage.max;
        inpHyb.style.display = "";
        inpHyb.nextSibling.textContent = " % Increased Physical Damage";
    } else {
        inpHyb.value = 0;
        inpHyb.style.display = "none";
        inpHyb.nextSibling.textContent = "";
    }

    if (tierData && tierData.as1 && tierData.as2) {
        inpHybAS.min = tierData.as1;
        inpHybAS.max = tierData.as2;
        inpHybAS.value = tierData.as2;
        inpHybAS.style.display = "";
        hybAsLabel.style.display = "";
        hybAsUnit.style.display = "";
        inpHybAS.placeholder = `${tierData.as1}-${tierData.as2}`;
    } else {
        inpHybAS.value = 0;
        inpHybAS.style.display = "none";
        hybAsLabel.style.display = "none";
        hybAsUnit.style.display = "none";
        inpHybAS.placeholder = "0-0";
    }

    if (inpHyb.style.display === "none" && inpHybAS.style.display === "none") {
        displayTierValues.style.display = "none";
    } else {
        displayTierValues.style.display = "none";
    }

    updateTotalValues();
}

  function updateInpSpeedTier(tier) {
    const tierData = pdpsData.tiersSpeed[tier];
    if (tierData) {
      inpSpeed.min = tierData.min;
      inpSpeed.max = tierData.max;
      inpSpeed.value = Math.round(tierData.max);
    } else {
      console.error("Invalid Speed tier selected:", tier);
    }
  }

  function updateInpCritTier(tier) {
    const tierData = pdpsData.tiersCrit[tier];
    if (tierData) {
      inpCrit.min = tierData.min;
      inpCrit.max = tierData.max;
      inpCrit.value = Math.round(tierData.max);
    } else {
      console.error("Invalid Crit tier selected:", tier);
    }
  }

  function updateInpSynthFlatTier(tier) {
    const tierData = pdpsData.tiersSynthFlat[tier];
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

  function updateInpSynthPhysTier(tier) {
    const tierData = pdpsData.tiersSynthPhys[tier] || { min: 0, max: 0 };
    inpSynthPhys.min = tierData.min;
    inpSynthPhys.max = tierData.max;
    inpSynthPhys.value = tierData.max;
  }

  function updateInpSynthSpeedTier(tier) {
    const tierData = pdpsData.tiersSynthSpeed[tier];
    if (tierData) {
      inpSynthSpeed.min = tierData.min;
      inpSynthSpeed.max = tierData.max;
      inpSynthSpeed.value = tierData.max;
    } else {
      console.error("Invalid Synth Speed tier selected:", tier);
      inpSynthSpeed.value = 0;
    }
  }

  function updateTotalValues() {
    try {
        const baseTier = selBase.value;
        const baseData = pdpsData.axeBases[baseTier] || { min: 0, max: 0, baseAps: 0, critc: 0 };
        let baseMinValue = parseFloat(inpBaseMin.value) || baseData.min;
        let baseMaxValue = parseFloat(inpBaseMax.value) || baseData.max;

        const flatTier = parseInt(selFlat.value) || 0;
        const flatData = pdpsData.tiersFlat[flatTier] || { min1: 0, max1: 0, min2: 0, max2: 0 };
        const flatMinValue = parseFloat(inpFlatMin.value) || flatData.max1;
        const flatMaxValue = parseFloat(inpFlatMax.value) || flatData.max2;

        const physTier = parseInt(selPhys.value) || 0;
        const physData = pdpsData.tiersPhys[physTier] || { min: 0, max: 0 };
        const physValue = parseFloat(inpPhys.value) || physData.max;

        const hybTierKey = selHyb.value;
        const hybData = pdpsData.tiersHyb[hybTierKey];
        const hybValue = (hybData && hybData.physDamage) ? (parseFloat(inpHyb.value) || hybData.physDamage.max) : 0;
        let hybAttackSpeed = parseFloat(inpHybAS.value) || 0;

        const speedTier = parseInt(selSpeed.value) || 0;
        const speedData = pdpsData.tiersSpeed[speedTier] || { min: 0, max: 0 };
        let speedValue = parseFloat(inpSpeed.value) || speedData.max;

        const critTier = parseInt(selCrit.value) || 0;
        const critData = pdpsData.tiersCrit[critTier] || { min: 0, max: 0 };
        const critValue = parseFloat(inpCrit.value) || critData.max;

        const incQual = parseFloat(inpQual.value) || 0;
        const qualityMultiplier = 1 + (incQual / 100);

        const synthFlatTier = parseInt(selSynthFlat.value) || 0;
        const synthFlatData = pdpsData.tiersSynthFlat[synthFlatTier] || { min1: 0, max1: 0, min2: 0, max2: 0 };
        const synthFlatMinValue = parseFloat(inpSynthFlatMin.value) || synthFlatData.max1;
        const synthFlatMaxValue = parseFloat(inpSynthFlatMax.value) || synthFlatData.max2;

        const synthPhysTier = parseInt(selSynthPhys.value) || 0;
        const synthPhysData = pdpsData.tiersSynthPhys[synthPhysTier] || { min: 0, max: 0 };
        const synthPhysValue = parseFloat(inpSynthPhys.value) || synthPhysData.max;

        const synthSpeedTier = parseInt(selSynthSpeed.value) || 0;
        const synthSpeedData = pdpsData.tiersSynthSpeed[synthSpeedTier] || { min: 0, max: 0 };
        const synthSpeedValue = parseFloat(inpSynthSpeed.value) || synthSpeedData.max;

        const selectedIndex = parseInt(selEnch.value) || 0;
        const selectedEnchant = selectedIndex > 0 ? pdpsData.tiersEnch[selectedIndex - 1] : null;
        let enchBonus = 0;
        if (selectedEnchant && selectedEnchant.physHybBonus) {
            const bonusMin = selectedEnchant.physHybBonus.min;
            const bonusMax = selectedEnchant.physHybBonus.max;
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
            const totalSpeedValue = speedValue + synthSpeedValue + hybAttackSpeed;
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

  function updatePdps() {
    const minPdps = parseFloat(totalMin.innerText) || 0;
    const maxPdps = parseFloat(totalMax.innerText) || 0;
    const aps = parseFloat(wepAps.innerText) || 0;
    const finalDPS = Math.round(((minPdps + maxPdps) / 2) * aps);
    basePdps.innerText = isNaN(finalDPS) ? "0" : finalDPS;
  }

  populateSelEnch();
  populateSelSynthFlat();
  populateSelSynthPhys();
  populateSelSynthSpeed();
  populateSelHyb();
  applyEnchantModifiers();
  updateModifierDisplays();
  updateTotalValues();
  updatePdps();

selBase.addEventListener("change", () => {
  const selectedBase = selBase.value;
  updateInpBase(selectedBase);
  baseImg.src = githubBaseUrl + `img/${selectedBase}.png`; // <-- IMPORTANT FIX
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
    const selectedTierKey = selHyb.value;
    updateInpHybTier(selectedTierKey);
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

  const inputElements = [
    inpFlatMin, inpFlatMax, inpBaseMin, inpBaseMax,
    inpPhys, inpHyb, inpSpeed, inpQual, inpCrit, inpEnch1,
    inpSynthFlatMin, inpSynthFlatMax, inpSynthPhys, inpSynthSpeed
  ];

  inputElements.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        if (input.id === "inpSynthPhys") {
          const tier = parseInt(selSynthPhys.value) || 0;
          const tierData = pdpsData.tiersSynthPhys[tier] || { min: 0, max: 0 };
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