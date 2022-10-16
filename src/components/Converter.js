import React, { useState } from "react";

export const Converter = ({ qty, unit }) => {
  const currQty = qty;
  const currUnit = unit;
  const kg = "kg";
  const g = "g";
  const lbs = "lbs";
  const ml = "ml";
  const l = "l";
  const oz = "oz";

  const [convertedQty, setConvertedQty] = useState(currQty);
  const [convertedUnit, setConvertedUnit] = useState(currUnit);

  const handleChange = (event) => {
    const selectedUnit = event.target.value;

    setConvertedUnit(selectedUnit);

    if (currUnit === g) {
      if (selectedUnit === kg) {
        return setConvertedQty(GtoKG(currQty));
      } else if (selectedUnit === oz) {
        return setConvertedQty(GtoOz(currQty));
      } else if (selectedUnit === lbs) {
        return setConvertedQty(GtoLbs(currQty));
      } else {
        return setConvertedQty(currQty);
      }
    } else if (currUnit === kg) {
      if (selectedUnit === g) {
        return setConvertedQty(KGtoG(currQty));
      } else if (selectedUnit === lbs) {
        return setConvertedQty(KGtoLbs)(currQty);
      } else if (selectedUnit === oz) {
        return setConvertedQty(KGtoOz(currQty));
      } else {
        return setConvertedQty(currQty);
      }
    } else if (currUnit === oz) {
      if (selectedUnit === lbs) {
        return setConvertedQty(OztoLbs(currQty));
      } else if (selectedUnit === g) {
        return setConvertedQty(OztoG(currQty));
      } else if (selectedUnit === kg) {
        return setConvertedQty(OztoKG(currQty));
      } else {
        return setConvertedQty(currQty);
      }
    } else if (currUnit === lbs) {
      if (selectedUnit === g) {
        return setConvertedQty(LbstoG(currQty));
      } else if (selectedUnit === kg) {
        return setConvertedQty(LbstoKG(currQty));
      } else if (selectedUnit === oz) {
        return setConvertedQty(LbstoOz(currQty));
      } else {
        return setConvertedQty(currQty);
      }
    } else if (currUnit === ml) {
      if (selectedUnit === oz) {
        return setConvertedQty(MLtoOz(currQty));
      } else if (selectedUnit === l) {
        return setConvertedQty(MLtoL(currQty));
      } else {
        return setConvertedQty(currQty);
      }
    } else {
      if (selectedUnit === oz) {
        return setConvertedQty(LtoOz(currQty));
      } else if (selectedUnit === ml) {
        return setConvertedQty(LtoML(currQty));
      } else {
        return setConvertedQty(currQty);
      }
    }
  };

  return (
    <form>
      <input readOnly value={convertedQty} />
      <select value={convertedUnit} onChange={handleChange}>
        {(currUnit !== ml || currUnit !== l) && (
          <option value="g">Grams</option>
        )}
        {(!currUnit !== ml || currQty !== l) && (
          <option value="kg">Kilograms</option>
        )}
        {(!currUnit !== ml || currQty !== l) && (
          <option value="lbs">Pounds</option>
        )}
        {(!currUnit !== ml || currQty !== l) && (
          <option value="oz">Ounce</option>
        )}
        {(currUnit === "l" || currUnit === "oz" || currUnit === "ml") && (
          <option value="ml">Mililitres</option>
        )}
        {(currUnit === "ml" || currUnit === "oz" || currUnit === "l") && (
          <option value="l">Litres</option>
        )}
      </select>
    </form>
  );
};

//conversions
function KGtoG(kilograms) {
  const grams = kilograms * 1000;
  return grams;
}

function GtoKG(grams) {
  return grams / 1000;
}

function LbstoG(pound) {
  return pound * 452.59237;
}

function LbstoKG(pound) {
  return pound * 0.45359237;
}

function OztoG(ounce) {
  return ounce * 28.349523125;
}

function OztoLbs(ounce) {
  return ounce * 0.0625;
}

function LbstoOz(pound) {
  return pound * 16;
}

function GtoLbs(grams) {
  return grams * 0.0022046226;
}

function GtoOz(grams) {
  return grams * 0.0352739619;
}

function KGtoOz(kilograms) {
  return kilograms * 35.27396195;
}

function KGtoLbs(kilograms) {
  return kilograms * 2.20462;
}

function OztoKG(ounce) {
  return ounce * 0.0283;
}

function MLtoL(mililitres) {
  return mililitres * 0.001;
}

function MLtoOz(mililitres) {
  return mililitres * 0.0351951;
}

function MLtoTBS(mililitres) {
  return mililitres * 0.067628;
}

function LtoML(litres) {
  return litres * 1000;
}

function LtoOz(litres) {
  return litres * 33.814;
}

function LtoTSP(litres) {
  return litres * 202.884;
}

function LtoTBS(litres) {
  return litres * 56.3121;
}

function TBStoML(tablespoon) {
  return tablespoon * 17.7582;
}
