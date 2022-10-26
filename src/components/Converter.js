import React, { useState } from "react";

export const Converter = ({ qty, unit }) => {

  const currQty = qty;
  const currUnit = unit;
    // Let's move these static variables outside of our component in line 2. That way they don't get redefined on every rerender.
  const kg = "kg";
  const g = "g";
  const lbs = "lbs";
  const ml = "ml";
  const l = "l";
  const oz = "oz";
  const fl = "fl";

  // ideally we define our hooks always in the topmost position
  // since we only use currQty here, we might just do: useState(qty) and don't need to declare these variables on top
  const [convertedQty, setConvertedQty] = useState(currQty);
  const [convertedUnit, setConvertedUnit] = useState(currUnit);

  const handleChange = (event) => {
    const selectedUnit = event.target.value;
    setConvertedUnit(selectedUnit);

    if (currUnit === g) {

      // a switch statement would be perfect here

      /*
      
      switch(selectedUnit) {
        case kg: return setConvertedQty(GtoKG(currQty));
        case oz: return setConvertedQty(GtoOz(currQty));
        default: return setConvertedQty(currQty);
      }
      
      */

      // I do think we can move the logic of each separate if statement in a function as well so it would like
      /*
      
      if (currUnit === g) {
        convertGramToKg() or something along these lines
      }

      To make this logic even easier, I would do an object then

      const conversions = {
        "g": convertGramToKg(),
        "kg": convertKgToGram(),
        ...
      }

      and then use it like:

      conversions[currUnit]

      This way we have one line, abstracted into an object, which calls a specific function depending on which key you access
      
      */
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
      } else if (selectedUnit === ml) {
        return setConvertedQty(OztoML(currQty));
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
    // If current unit can be any of all possible units, is it then necessary to conditionally render here?
    (currUnit === g ||
      currUnit === kg ||
      currUnit === lbs ||
      currUnit === ml ||
      currUnit === l ||
      currUnit === oz ||
      currUnit === fl) && (
      <form>
        <p>
          {convertedQty}
          <select value={convertedUnit} onChange={handleChange}>
            {/* The first three options, seem to be identical, we could create a variable for this.
            
            const isSolidWeight = currUnit === g || currUnit === oz || currUnit === lbs || currUnit === kg
            const isLiquidWeight = currUnit === ml || currUnit === l

            then do a check for either or both of these variables or something along these lines.
            
            */}
            {(currUnit === g ||
              currUnit === oz ||
              currUnit === lbs ||
              currUnit === kg) && <option value="g">Grams</option>}
            {(currUnit === kg ||
              currUnit === g ||
              currUnit === oz ||
              currUnit === lbs) && <option value="kg">Kilograms</option>}
            {(currUnit === g ||
              currUnit === oz ||
              currUnit === lbs ||
              currUnit === kg) && <option value="lbs">Pounds</option>}
            {(currUnit === g ||
              currUnit === oz ||
              currUnit === lbs ||
              currUnit === kg ||
              currUnit === ml ||
              currUnit === l) && <option value="oz">Ounce</option>}
            {(currUnit === l || currUnit === oz || currUnit === ml) && (
              <option value="ml">Mililitres</option>
            )}
            {(currUnit === l || currUnit === oz || currUnit === ml) && (
              <option value="l">Litres</option>
            )}
          </select>
        </p>
      </form>
    )
  );
};

// Don't forget that capital letter for functions is always reserved for classes or components only.
// Ideally we name our functions as to what they do in plain english. In this case we convert, so let's lead our function name with that word.
//conversions
// convertKilogramToGram
function KGtoG(kilograms) {
  const grams = kilograms * 1000;
  return grams;
}

// convertGramToKilogram
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

function OztoML(ounce) {
  return ounce * 29.5735;
}

function MLtoL(mililitres) {
  return mililitres * 0.001;
}

function MLtoOz(mililitres) {
  return mililitres * 0.0351951;
}

function LtoML(litres) {
  return litres * 1000;
}

function LtoOz(litres) {
  return litres * 33.814;
}
