function calculateDosage() {
  const medication = document.getElementById('medication').value;
  let weight = parseFloat(document.getElementById('weight').value);
  const weightUnit = document.querySelector('input[name="weightUnit"]:checked').value;
  let dosage = 0;
  let dosageInfo = '';

  if (isNaN(weight) || weight <= 0) {
      alert('Please enter a valid weight');
      return;
  }

  // Convert weight to kg if it is in lbs
  if (weightUnit === 'lbs') {
      weight = weight / 2.20462; // Convert lbs to kg
  }

  switch (medication) {
      case 'acetaminophen':
          dosage = weight * 10; // Example: 10-15 mg/kg every 4-6 hours
          dosageInfo = `Acetaminophen: ${dosage.toFixed(2)} mg per dose (every 4-6 hours)`;
          break;
      case 'ibuprofen':
          dosage = weight * 5; // Example: 5-10 mg/kg every 6-8 hours
          dosageInfo = `Ibuprofen: ${dosage.toFixed(2)} mg per dose (every 6-8 hours).`;
          break;
      case 'amoxicillin':
          dosage = weight * 25; // Example: 20-40 mg/kg/day in divided doses
          dosageInfo = `Amoxicillin: ${dosage.toFixed(2)} mg per dose (twice daily).`;
          break;
      case 'azithromycin':
          dosage = weight * 10; // Example: 10 mg/kg on day 1, then 5 mg/kg on days 2-5
          dosageInfo = `Azithromycin: ${dosage.toFixed(2)} mg on day 1, then ${(dosage / 2).toFixed(2)} mg on days 2-5.`;
          break;
      case 'cephalexin':
          dosage = weight * 25; // Example: 25-50 mg/kg/day in divided doses
          dosageInfo = `Cephalexin: ${dosage.toFixed(2)} mg per dose (twice daily).`;
          break;
      case 'albuterol':
          dosage = weight * 0.15; // Example: 0.1-0.15 mg/kg per dose
          dosageInfo = `Albuterol: ${dosage.toFixed(2)} mg per dose (as needed).`;
          break;
      case 'prednisolone':
          dosage = weight * 2; // Example: 1-2 mg/kg/day in divided doses
          dosageInfo = `Prednisolone: ${dosage.toFixed(2)} mg per dose (once daily).`;
          break;
      case 'ondansetron':
          dosage = weight * 0.15; // Example: 0.1-0.15 mg/kg per dose
          dosageInfo = `Ondansetron: ${dosage.toFixed(2)} mg per dose (every 8 hours as needed).`;
          break;
      case 'diphenhydramine':
          dosage = weight * 1.25; // Example: 1.25 mg/kg per dose
          dosageInfo = `Diphenhydramine: ${dosage.toFixed(2)} mg per dose (every 4-6 hours as needed).`;
          break;
      case 'fluconazole':
          dosage = weight * 6; // Example: 6-12 mg/kg per dose
          dosageInfo = `Fluconazole: ${dosage.toFixed(2)} mg per dose (once daily).`;
          break;
      // Add more medications as needed
      default:
          dosageInfo = 'Medication not recognized.';
  }

  document.getElementById('result').innerText = dosageInfo;
}
