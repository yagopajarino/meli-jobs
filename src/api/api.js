// const getJobs = async (location, departament, seniority, start) => {
//   return [
//     {
//       id: 14054015,
//       name: "Ingeniera / Ingeniero Senior de Software Android",
//       location: "Bogotá,Colombia",
//       locations: ["Bogotá,Colombia"],
//       hot: 1,
//       department: "IT",
//       business_unit: "IT (IT)",
//       t_update: 1665588810,
//       t_create: 1665489215,
//       ats_job_id: "61173",
//       display_job_id: "61173",
//       type: "ATS",
//       id_locale: "61173-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 1386516,
//       name: "Ingeniera / Ingeniero Senior de Software Back End",
//       location: "Medellín,Colombia",
//       locations: ["Medellín,Colombia"],
//       hot: 1,
//       department: "IT",
//       business_unit: "IT (IT)",
//       t_update: 1648661762,
//       t_create: 1587674406,
//       ats_job_id: "37386",
//       display_job_id: "37386",
//       type: "ATS",
//       id_locale: "37386-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15102483,
//       name: "Analista Senior de Control de Costos - Mercado Envíos",
//       location: "Distrito Federal,Mexico",
//       locations: ["Distrito Federal,Mexico"],
//       hot: 0,
//       department: "Shipping",
//       business_unit: "Shipping (Shipping)",
//       t_update: 1675211996,
//       t_create: 1675103829,
//       ats_job_id: "63445",
//       display_job_id: "63445",
//       type: "ATS",
//       id_locale: "63445-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15102069,
//       name: "Analista Comercial - Marketplace",
//       location: "Distrito Federal,Mexico",
//       locations: ["Distrito Federal,Mexico"],
//       hot: 0,
//       department: "Marketplace",
//       business_unit: "Marketplace (Marketplace)",
//       t_update: 1675211770,
//       t_create: 1675096310,
//       ats_job_id: "63435",
//       display_job_id: "63435",
//       type: "ATS",
//       id_locale: "63435-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15066282,
//       name: "Supervisora / Supervisor de Operaciones",
//       location: "Chihuahua,Mexico",
//       locations: ["Chihuahua,Mexico"],
//       hot: 0,
//       department: "Shipping",
//       business_unit: "Shipping (Shipping)",
//       t_update: 1675211582,
//       t_create: 1674595533,
//       ats_job_id: "63310",
//       display_job_id: "63310",
//       type: "ATS",
//       id_locale: "63310-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15066273,
//       name: "Supervisora / Supervisor de Operaciones",
//       location: "Monterrey,Mexico",
//       locations: ["Monterrey,Mexico"],
//       hot: 0,
//       department: "Shipping",
//       business_unit: "Shipping (Shipping)",
//       t_update: 1675211380,
//       t_create: 1674595488,
//       ats_job_id: "63309",
//       display_job_id: "63309",
//       type: "ATS",
//       id_locale: "63309-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 14915010,
//       name: "Analista de Experiencia Post Compra - Customer Experience",
//       location: "Buenos Aires,Argentina",
//       locations: ["Buenos Aires,Argentina"],
//       hot: 0,
//       department: "Customer Experience",
//       business_unit: "Customer Experience (Customer Experience)",
//       t_update: 1675105370,
//       t_create: 1672084338,
//       ats_job_id: "62802",
//       display_job_id: "62802",
//       type: "ATS",
//       id_locale: "62802-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15101046,
//       name: "Analista de Auditoría Interna",
//       location: "Buenos Aires,Argentina",
//       locations: ["Buenos Aires,Argentina"],
//       hot: 0,
//       department: "Internal Audit",
//       business_unit: "Internal Audit (Internal Audit)",
//       t_update: 1675105199,
//       t_create: 1675088858,
//       ats_job_id: "63425",
//       display_job_id: "63425",
//       type: "ATS",
//       id_locale: "63425-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15081827,
//       name: "Analista de Data Analytics para Cobranzas - Mercado Crédito",
//       location: "Buenos Aires,Argentina",
//       locations: ["Buenos Aires,Argentina"],
//       hot: 0,
//       department: "Credits",
//       business_unit: "Credits (Credits)",
//       t_update: 1675084298,
//       t_create: 1674834310,
//       ats_job_id: "63386",
//       display_job_id: "63386",
//       type: "ATS",
//       id_locale: "63386-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//     {
//       id: 15077083,
//       name: "Especialista Negocio Corporativo Pagos y Conexiones - Mercado Pago",
//       location: "Buenos Aires,Argentina",
//       locations: ["Buenos Aires,Argentina"],
//       hot: 0,
//       department: "Mercado Pago",
//       business_unit: "Mercado Pago (Mercado Pago)",
//       t_update: 1674858935,
//       t_create: 1674767196,
//       ats_job_id: "63369",
//       display_job_id: "63369",
//       type: "ATS",
//       id_locale: "63369-es_ES",
//       job_description: "",
//       locale: "es_ES",
//       stars: 0,
//       medallionProgram: null,
//       is_global: false,
//     },
//   ];
// };

const getJobs = async (location, departament, seniority, start) => {
  const data = { location, departament, seniority, start };
  const url = process.env.REACT_APP_API_ROOT + "/jobs";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => r.json());

  return response.sort((a, b) => {
    return b["t_update"] - a["t_update"];
  });
};

const api = {
  getJobs,
};

export default api;