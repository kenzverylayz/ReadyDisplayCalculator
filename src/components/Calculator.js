import React, { useState } from 'react';
import conversionUnits from './conversionTable';

function Calculator() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [quantity, setQuantity] = useState('');
  const [pricePerSqft, setPricePerSqft] = useState('');
  const [units, setUnits] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);  // New state to control dropdown visibility
  const gst = 9;

  const calculateSubtotal = () => {
    const heightValue = parseFloat(height) || 0;
    const widthValue = parseFloat(width) || 0;
    const quantityValue = parseFloat(quantity) || 0;
    const priceValue = parseFloat(pricePerSqft) || 0;
    const conversionUnitsValue = parseFloat(conversionUnits[units]) || 0;

    const area = (heightValue * widthValue) * (conversionUnitsValue ** 2);
    return area * quantityValue * priceValue;
  };

  const clearAll = () => {
    setHeight('');
    setWidth('');
    setQuantity('');
    setPricePerSqft('');
  };

  const subtotal = calculateSubtotal();
  const gstAmount = (subtotal * parseFloat(gst)) / 100;
  const total = subtotal + gstAmount;

  // Function to handle unit selection
  const handleUnitSelection = (unit) => {
    setUnits(unit);    // Set the selected unit
    setDropdownOpen(false);  // Close the dropdown after selection
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-lg mx-auto text-black bg-white p-6 rounded-lg shadow-lg">
       <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4 text-center">Calculator</h1>

        {/* Dropdown for unit selection */}
        <div className="flex flex-col mb-4">
         Units:
          <div className="dropdown">
            <div
              tabIndex={0}
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="btn bg-white border-gray-300 text-black hover:bg-gray-300 cursor-pointer" 
            >
              {units ? units : 'Select Unit'}
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-gray-200 rounded-box z-[1] w-52 p-2 shadow text-black"
              >  
                <li><a onClick={() => handleUnitSelection('mm')}>Milimeters</a></li>
                <li><a onClick={() => handleUnitSelection('cm')}>Centimeters</a></li>
                <li><a onClick={() => handleUnitSelection('m')}>Meters</a></li>
                <li><a onClick={() => handleUnitSelection('in')}>Inches</a></li>
                <li><a onClick={() => handleUnitSelection('ft')}>Feet</a></li>                
              </ul>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label>Height:</label>
            <input 
              type="number" 
              value={height} 
              onChange={e => setHeight(e.target.value)} 
              className="input input-bordered bg-white border-gray-300 p-2"
              placeholder="Enter height"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label>Width:</label>
            <input 
              type="number" 
              value={width} 
              onChange={e => setWidth(e.target.value)} 
              className="input input-bordered bg-white border-gray-300 p-2"
              placeholder="Enter width"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex flex-col w-1/2">
            <label>Quantity:</label>
            <input 
              type="number" 
              value={quantity} 
              onChange={e => setQuantity(e.target.value)} 
               className="input input-bordered bg-white border-gray-300 p-2"
              placeholder="Enter quantity"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label>Price per Sqft:</label>
            <input 
              type="number"
              value={pricePerSqft} 
              onChange={e => setPricePerSqft(e.target.value)} 
              className="input input-bordered bg-white border-gray-300 p-2"
              placeholder="Price per Sqft"
            />
          </div>
        </div>

        <div className="mt-4">
          <button onClick={clearAll} className="btn bg-red-500 text-white hover:bg-red-400 outline-indigo-50;">Clear all</button>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">Summary</h2>
          <p>Subtotal: ${isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</p>
          <p>GST ({gst}%): ${isNaN(gstAmount) ? '0.00' : gstAmount.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 border-t-2 pt-4">
        <h2 className="text-2xl font-bold text-right">Total: ${isNaN(total) ? '0.00' : total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Calculator;
