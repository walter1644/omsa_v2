function operar_quincena_1() {
  try {
    const valor_hora = parseFloat(document.getElementById('categoria').value);
    const horas_trabajadas = parseFloat(document.getElementById('horas_1').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const bruto = valor_hora * horas_trabajadas;
    const porcentaje_anio = antiguedad / 100;
    const antiguedad_bruta_1 = porcentaje_anio * bruto;
    const bruto_1 = antiguedad_bruta_1 + bruto;
    const descuento = bruto_1 * 0.195;
    const neto = Math.round((bruto_1 - descuento) * 100) / 100;

    window.bruto_1_quincena_1 = bruto_1;
    window.neto_quincena_1 = neto;

    document.getElementById('quincena_1').value = neto;
  } catch (error) {
    alert("Error: Ingrese datos válidos");
  }
}

function operar_quincena_2() {
  try {
    const valor_hora = parseFloat(document.getElementById('categoria').value);
    const horas_trabajadas = parseFloat(document.getElementById('horas_2').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    const titulo_secundario = parseFloat(document.getElementById('titulo').value);
    const bruto = valor_hora * horas_trabajadas;
    const bruto_total = bruto + titulo_secundario;
    const porcentaje_anio = antiguedad / 100;
    const antiguedad_bruta = porcentaje_anio * bruto_total;
    const bruto_q2 = antiguedad_bruta + bruto_total;
    const descuento = bruto_q2 * 0.195;
    const seguro_uom = 6579.24;
    const neto = Math.round((bruto_q2 - descuento - seguro_uom) * 100) / 100;

    window.bruto_2_quincena_2 = bruto_q2;
    window.neto_quincena_2 = neto;


    document.getElementById('quincena_2').value = neto;
  } catch (error) {
    alert("Error: Ingrese datos válidos");
  }
}

function calcular_total() {
  try {
    const total_neto = window.neto_quincena_1 + window.neto_quincena_2;
    document.getElementById('horas_mes').value = total_neto;
    window.neto_total = total_neto;

  } catch (error) {
    alert("Error: Calcule ambas quincenas primero");
  }
}

function calcular_imgr() {
  try {
    const imgr_bruto = 1004438.00;
    const imgr_descuento = imgr_bruto * 0.195;
    const imgr_total = imgr_bruto - imgr_descuento;
    const imgr = imgr_total - window.neto_total;
    document.getElementById('imgr').value = Math.round(imgr * 100) / 100;
    window.solo_imgr = imgr;
  } catch (error) {
    alert("Error: Calcule ambas quincenas primero");
  }
}

function calcular_q2() {
  try {
    const q2_con_imgr = window.neto_quincena_2 + window.solo_imgr;
    document.getElementById('q2').value = Math.round(q2_con_imgr * 100) / 100;
  } catch (error) {
    alert("Error: Calcule ambas quincenas e IMGR primero");
  }
}