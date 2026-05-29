const DISCIPLINAS_MAP = {
  CRT0002: "Fundamentos de Programação",
  CRT0003: "Arquitetura de Computadores",
  CRT0004: "Matemática Básica",
  CRT0006: "Pré-Cálculo",
  CRT0008: "Sistemas Operacionais",
  CRT0009: "Estrutura de Dados",
  CRT0010: "Cálculo Diferencial e Integral I",
  CRT0011: "Matemática Discreta",
  CRT0015: "Desenho para Engenharia",
  CRT0017: "Introdução à Engenharia",
  CRT0018: "Probabilidade e Estatística",
  CRT0021: "Teoria Geral da Administração",
  CRT0022: "Introdução à Ciência da Computação e Sistemas de Informação",
  CRT0023: "Teoria Geral de Sistemas",
  CRT0025: "Programação Funcional",
  CRT0026: "Estrutura de Dados Avançada",
  CRT0027: "Linguagens Formais e Autômatos",
  CRT0028: "Lógica para Computação",
  CRT0029: "Probabilidade e Estatística",
  CRT0030: "Fundamentos de Banco de Dados",
  CRT0031: "Linguagens de Programação",
  CRT0032: "Projeto e Análise de Algoritmos",
  CRT0033: "Álgebra Linear",
  CRT0034: "Análise e Projeto de Sistemas",
  CRT0035: "Compiladores",
  CRT0038: "Redes de Computadores",
  CRT0039: "Desenvolvimento de Software para Web",
  CRT0040: "Engenharia de Software",
  CRT0041: "Interação Humano-Computador",
  CRT0042: "Sistemas Distribuídos",
  CRT0043: "Inteligência Artificial",
  CRT0044: "Teoria da Computação",
  CRT0045: "Cálculo Vetorial",
  CRT0046: "Eletromagnetismo",
  CRT0047: "Termodinâmica Aplicada",
  CRT0048: "Fundamentos da Economia e Administração",
  CRT0049: "Princípios de Processos Químicos e Bioquímicos",
  CRT0050: "Mecânica II",
  CRT0051: "Transferência de Calor e Massa",
  CRT0052: "Topografia",
  CRT0053: "Eletrotécnica",
  CRT0054: "Métodos Numéricos",
  CRT0055: "Física Ondulatória e de Partículas",
  CRT0056: "Ecologia",
  CRT0057: "Qualidade da Água e Controle da Poluição",
  CRT0058: "Mecânica dos Fluidos",
  CRT0059: "Resistência dos Materiais I",
  CRT0060: "Saneamento e Saúde",
  CRT0061: "Mecânica dos Solos I",
  CRT0062: "Fontes de Energias Renováveis",
  CRT0063: "Operações Unitárias",
  CRT0064: "Climatologia",
  CRT0065: "Ciência dos Materiais",
  CRT0066: "Mecânica dos Solos II",
  CRT0067: "Resistência dos Materiais II",
  CRT0068: "Geoprocessamento",
  CRT0070: "Higiene Industrial e Segurança do Trabalho",
  CRT0071: "Microbiologia Aplicada",
  CRT0076: "Planejamento e Licenciamento Ambiental",
  CRT0077: "Engenharia Econômica",
  CRT0079: "Álgebra Aplicada I",
  CRT0081: "Análise Aplicada I",
  CRT0082: "Educação Ambiental",
  CRT0083: "Engenharia Costeira",
  CRT0084: "Gestão de Projetos",
  CRT0085: "Hidráulica Transiente",
  CRT0086: "Língua Brasileira de Sinais",
  CRT0087: "Métodos de Investigação e Monitoramento Geoambiental",
  CRT0088: "Modelagem de Qualidade de Água",
  CRT0089: "Português Instrumental",
  CRT0090: "Produção Mais Limpa",
  CRT0091: "Proteção e Recuperação Ambiental em Obras Geotécnicas",
  CRT0092: "Relações Étnico Raciais e Africanidades",
  CRT0093: "Reuso das Águas",
  CRT0094: "Saneamento Ecológico",
  CRT0095: "Saneamento I",
  CRT0096: "Saneamento II",
  CRT0102: "Geologia Geral e Mineralogia",
  CRT0104: "Materiais de Construção Civil II",
  CRT0106: "Análise e Planejamento de Sistemas de Transportes",
  CRT0107: "Engenharia Ambiental",
  CRT0108: "Hidráulica Aplicada",
  CRT0111: "Estruturas de Concreto I",
  CRT0113: "Hidrologia",
  CRT0114: "Estruturas de Aço I",
  CRT0115: "Estruturas de Concreto II",
  CRT0116: "Fundações",
  CRT0117: "Operações de Sistemas de Transportes",
  CRT0119: "Barragens",
  CRT0120: "Instalações Elétricas Prediais",
  CRT0121: "Estágio Supervisionado",
  CRT0122: "Água Subterrânea",
  CRT0123: "Alvenaria Estrutural I",
  CRT0124: "Alvenaria Estrutural II",
  CRT0125: "Análise Matricial de Estruturas",
  CRT0126: "Bombas e Estações Elevatórias",
  CRT0128: "Concretos Especiais",
  CRT0130: "Dinâmica das Estruturas",
  CRT0131: "Drenagem Urbana",
  CRT0132: "Educação em Direitos Humanos",
  CRT0133: "Estabilidade das Estruturas",
  CRT0134: "Estruturas de Alumínio",
  CRT0135: "Estruturas de Fundação",
  CRT0136: "Estruturas de Aço II",
  CRT0140: "Estruturas de Madeira",
  CRT0141: "Francês Instrumental I",
  CRT0143: "Gerenciamento da Produção na Construção Civil",
  CRT0144: "Gestão de Recursos Hídricos",
  CRT0145: "Tratamento de Esgotos",
  CRT0146: "Projeto Estrutural de Edifícios de Concreto",
  CRT0147: "Portos",
  CRT0148: "Pontes II",
  CRT0149: "Mecânica das Rochas",
  CRT0150: "Meteorologia Básica",
  CRT0151: "Método dos Elementos Finitos para Engenharia Estrutural",
  CRT0152: "Métodos Quantitativos Aplicados aos Transportes",
  CRT0153: "Hidráulica Fluvial",
  CRT0154: "Hidráulica de Canais",
  CRT0155: "Transporte Aéreo",
  CRT0156: "Transportes Não Motorizados",
  CRT0157: "Teoria da Elasticidade",
  CRT0158: "Tratamento de Água e Esgoto",
  CRT0159: "Materiais Betuminosos",
  CRT0160: "Simulação",
  CRT0161: "Patologia e Recuperação de Estruturas de Concreto",
  CRT0162: "Placas e Cascas",
  CRT0164: "Obras de Contenção",
  CRT0165: "Introdução à Engenharia Sísmica",
  CRT0166: "Desenvolvimento Econômico",
  CRT0169: "Logística Global",
  CRT0170: "Otimização",
  CRT0171: "Tomada de Decisão na Engenharia",
  CRT0173: "Análise de Estruturas I",
  CRT0174: "Projeto e Construção da Infraestrutura Viária",
  CRT0177: "Análise de Estruturas II",
  CRT0178: "Projeto e Construção da Superestrutura Viária",
  CRT0179: "Pontes I",
  CRT0180: "Gestão de Resíduos Sólidos",
  CRT0184: "Inglês Técnico",
  CRT0187: "Desenho Técnico",
  CRT0190: "Geologia Estrutural",
  CRT0192: "Caracterização Tecnológica dos Minérios",
  CRT0193: "Físico-Química",
  CRT0194: "Pesquisa Mineral I",
  CRT0197: "Prospecção Geofísica",
  CRT0199: "Ciência dos Materiais",
  CRT0202: "Desenvolvimento Mineiro",
  CRT0205: "Economia Mineral Brasileira",
  CRT0207: "Pesquisa Operacional Aplicada à Mineração",
  CRT0210: "Projeto de Mineração",
  CRT0219: "Manejo de Estéreis e Rejeitos de Minerais",
  CRT0220: "Minerais e Rochas Industriais",
  CRT0222: "Projeto de Instalações de Processamento de Minerais",
  CRT0224: "Dimensionamento de Escavações em Rocha",
  CRT0225: "Hidrogeologia",
  CRT0226: "Auditoria e Segurança de Sistemas de Informação",
  CRT0229: "Construção de Sistemas de Gerência de Banco de Dados",
  CRT0233: "Estágio Supervisionado I",
  CRT0235: "Estágio Supervisionado II",
  CRT0236: "Inglês Instrumental I",
  CRT0237: "Funções Empresariais",
  CRT0240: "Inglês Instrumental II",
  CRT0241: "Filosofia da Ciência",
  CRT0242: "Empreendedorismo",
  CRT0243: "Gerência de Redes",
  CRT0244: "Redes Sociais",
  CRT0245: "E-Business",
  CRT0246: "Economia e Finanças",
  CRT0247: "Introdução à Computação Gráfica",
  CRT0248: "Projeto e Análise de Algoritmos",
  CRT0249: "Sistemas Multimídia",
  CRT0250: "Sociologia",
  CRT0252: "Tópicos Avançados em Redes de Computadores",
  CRT0253: "Sistemas Multiagentes",
  CRT0254: "Governança Estratégica de Tecnologia da Informação",
  CRT0255: "Programação Linear",
  CRT0259: "Hidráulica de Canais",
  CRT0260: "Instalações Hidráulicas e Sanitárias Prediais",
  CRT0261: "Sistema de Abastecimento e Tratamento de Água",
  CRT0262: "Gestão da Informação e dos Sistemas de Informação",
  CRT0265: "Contabilidade e Custos",
  CRT0266: "Gerência de Projetos de Software",
  CRT0267: "Qualidade de Software",
  CRT0268: "Trabalho Cooperativo Baseado em Computadores",
  CRT0269: "Avaliação de Sistemas",
  CRT0270: "Compiladores",
  CRT0273: "Tópicos Especiais I",
  CRT0274: "Tópicos Especiais II",
  CRT0275: "Tópicos Especiais III",
  CRT0276: "Tópicos Especiais IV",
  CRT0279: "Estágio Supervisionado",
  CRT0280: "Matemática Aplicada",
  CRT0281: "Gestão de Pavimentos",
  CRT0282: "Projeto de Graduação",
  CRT0283: "Pesquisa Mineral II",
  CRT0284: "Processamento Mineral II",
  CRT0285: "Operações Mineiras",
  CRT0287: "Condicionamento das Minas",
  CRT0288: "Estágio Supervisionado",
  CRT0291: "Introdução a Análise Estatística de Experimentos",
  CRT0294: "Projeto de Pesquisa Científica e Tecnológica",
  CRT0300: "Teoria dos Grafos",
  CRT0302: "Mineração de Dados",
  CRT0303: "Recuperação de Informação",
  CRT0304: "Realidade Virtual",
  CRT0305: "Processamento de Imagens",
  CRT0306: "Introdução ao Desenvolvimento de Jogos",
  CRT0307: "Estatística Multivariada",
  CRT0308: "Criptografia",
  CRT0309: "Computação Paralela",
  CRT0311: "Algoritmos Probabilísticos",
  CRT0312: "Física I",
  CRT0313: "Aprendizado de Máquina",
  CRT0314: "Cálculo Numérico",
  CRT0315: "Lógica Modal",
  CRT0316: "Teoria da Prova",
  CRT0317: "Modelagem e Simulação Discreta de Sistemas",
  CRT0318: "Sistemas Multiagentes",
  CRT0319: "Otimização Combinatória",
  CRT0320: "Pesquisa Operacional",
  CRT0323: "Visão Computacional",
  CRT0324: "Experimentação em Engenharia de Software",
  CRT0325: "Redes de Comunicação Móveis",
  CRT0326: "Verificação e Validação",
  CRT0327: "Reuso de Software",
  CRT0329: "Qualidade de Software",
  CRT0330: "Projeto Detalhado de Software",
  CRT0331: "Processos de Software",
  CRT0333: "Manutenção de Software",
  CRT0337: "Análise de Riscos Ambientais",
  CRT0338: "Álgebra Linear",
  CRT0339: "Cálculo Fundamental I",
  CRT0340: "Física Geral I",
  CRT0342: "Química Geral",
  CRT0343: "Programação Computacional",
  CRT0344: "Cálculo Fundamental II",
  CRT0345: "Física Geral II",
  CRT0348: "Química Experimental",
  CRT0350: "Geologia Geral",
  CRT0351: "Mecânica I",
  CRT0354: "Materiais de Construção Civil I",
  CRT0355: "Sistemas de Tratamento de Águas Residuárias",
  CRT0356: "Legislação Ambiental",
  CRT0358: "Mecânica dos Solos",
  CRT0359: "Resistência dos Materiais",
  CRT0360: "Química Analítica APLICADA",
  CRT0361: "Biologia Geral",
  CRT0366: "Programação Computacional",
  CRT0367: "Controle da Poluição Atmosférica",
  CRT0368: "Mecânica dos Sólidos",
  CRT0369: "Geologia para Engenharia",
  CRT0370: "Geotecnia Ambiental",
  CRT0371: "Gestão Ambiental",
  CRT0372: "Sistemas de Tratamento de Águas de Abastecimento",
  CRT0373: "Projeto de Aterro Sanitário",
  CRT0374: "Gestão de Resíduos Sólidos",
  CRT0375: "Instalações Hidráulicas e Sanitárias Prediais",
  CRT0378: "Economia Ecológica",
  CRT0379: "Projeto de Redes de Águas Residuárias",
  CRT0380: "Projeto de Redes de Águas de Abastecimento",
  CRT0381: "Projeto de Graduação I",
  CRT0382: "Projeto de Graduação II",
  CRT0383: "Introdução à Ciência da Computação",
  CRT0384: "Circuitos Digitais",
  CRT0385: "Informática e Sociedade",
  CRT0386: "Cálculo Diferencial e Integral I",
  CRT0387: "Arquitetura de Computadores",
  CRT0388: "Computação Gráfica I",
  CRT0389: "Compiladores e Linguagens de Programação",
  CRT0390: "Algoritmos em Grafos",
  CRT0391: "Cálculo Diferencial e Integral II",
  CRT0392: "Game Design",
  CRT0393: "Engenharia de Requisitos",
  CRT0394: "Fábrica de Software",
  CRT0395: "Aprendizado de Máquina",
  CRT0396: "Computação Gráfica II",
  CRT0397: "Educação Ambiental",
  CRT0399: "Gênese de Depósitos Minerais",
  CRT0400: "Petrografia",
  CRT0401: "Ciência dos Dados",
  CRT0402: "Fundamentos Aplicados da Administração",
  CRT0403: "Introdução a Sistemas de Informação",
  CRT0405: "Gestão de Processos de Negócios",
  CRT0406: "Gestão Estratégica de TI",
  CRT0407: "Algoritmos e Complexidade Computacional",
  CRT0408: "Governança de TI e Gestão do Conhecimento",
  CRT0411: "Desenvolvimento de Software para Dispositivos Móveis",
  CRT0412: "Arquitetura de Software",
  CRT0413: "Melhoria de Processos de TI",
  CRT0414: "Infraestrutura de TI e Computação em Nuvem",
  CRT0415: "Gestão da Inovação e Transformação Digital",
  CRT0416: "Inteligência de Negócio e Visualização de Dados",
  CRT0417: "Processamento de Dados em Larga Escala",
  CRT0420: "Inteligência Artificial para Jogos",
  CRT0421: "Pesquisa Operacional II",
  CRT0423: "Termodinâmica e Transferência de Calor",
  CRT0425: "Análise de Estruturas I",
  CRT0426: "Análise de Estruturas II",
  CRT0427: "Projeto Integrador I",
  CRT0428: "Projeto Integrador II",
  CRT0429: "Projeto Integrador III",
  CRT0430: "Projeto Integrador IV",
  CRT0436: "Mineralogia",
  CRT0437: "Introdução à Geoestatística",
  CRT0439: "Mecânica das Rochas",
  CRT0440: "Processamento Mineral I",
  CRT0441: "Legislação Mineral",
  CRT0443: "Lavra de Mina a Céu Aberto",
  CRT0444: "Lavra de Mina Subterrânea",
  CRT0445: "Processamento Mineral III",
  CRT0449: "Descomissionamento de Mina",
  CRT0450: "Desenvolvimento de Processo",
  CRT0451: "Desmontes Especiais com Utilização de Explosivos",
  CRT0452: "Flotação",
  CRT0453: "Introdução à Metalurgia Extrativa",
  CRT0454: "Introdução ao Método dos Elementos Finitos Aplicado à Mineração",
  CRT0455: "Lavra e Beneficiamento de Rochas Ornamentais",
  CRT0457: "Recursos Naturais Energéticos",
  CRT0458: "Tópicos de Álgebra Aplicada",
  CRT0459: "Transporte na Mineração",
  CRT0460: "Engenharia de Processos",
  CRT0465: "Introdução à Engenharia",
  CRT0466: "Fundamentos da Economia e Administração",
  CRT0467: "Química Experimental",
  CRT0471: "Topografia para Engenharia",
  CRT0472: "Engenharia Econômica",
  CRT0473: "Higiene e Segurança do Trabalho",
  CRT0474: "Geoprocessamento",
  CRT0479: "Eletrotécnica",
  CRT0498: "Estabilidade de Taludes e Galerias",
  CRT0500: "Hidrogeologia",
  CRT0507: "Química Experimental",
  CRT0508: "Materiais de Construção Civil I",
  CRT0509: "Topografia para Engenharia",
  CRT0510: "Projeto de Edifícios",
  CRT0511: "Mecânica para Engenharia",
  CRT0512: "Materiais de Construção Civil II",
  CRT0514: "Geologia para Engenharia",
  CRT0515: "Isostática",
  CRT0516: "Construção de Edifícios I",
  CRT0517: "Eletrotécnica Residencial",
  CRT0518: "Métodos Numéricos",
  CRT0520: "Construção de Edifícios II",
  CRT0522: "Projeto Geométrico de Vias de Transporte",
  CRT0524: "Projeto Integrador I",
  CRT0525: "Saneamento I",
  CRT0526: "Engenharia de Pavimentos",
  CRT0527: "Hiperestática",
  CRT0528: "Estruturas de Concreto I",
  CRT0529: "Instalações Hidráulicas e Sanitárias Prediais",
  CRT0530: "Metodologia Científica",
  CRT0531: "Saneamento II",
  CRT0532: "Obras de Terra",
  CRT0533: "Patologia das Construções",
  CRT0534: "Avaliação e Reabilitação de Pavimentos",
  CRT0535: "Estruturas de Aço I",
  CRT0536: "Estruturas de Concreto II",
  CRT0537: "Projeto Integrador II",
  CRT0538: "Projeto Final de Curso I",
  CRT0539: "Projeto Final de Curso II",
  CRT0540: "Barragens",
  CRT0542: "Cimentos Alternativos",
  CRT0543: "Construção Sustentável",
  CRT0544: "Direito Aplicado à Engenharia",
  CRT0545: "Engenharia de Tráfego",
  CRT0546: "Engenharia Legal",
  CRT0547: "Estruturas de Contenção",
  CRT0548: "Fenômenos Ondulatórios e Térmicos nas Edificações",
  CRT0549: "Ferrovias",
  CRT0550: "Fontes de Energias Renováveis",
  CRT0551: "Geossintéticos",
  CRT0552: "Geotecnia Aplicada à Mineração",
  CRT0553: "Gerência de Pavimentos",
  CRT0554: "Gestão Ambiental",
  CRT0555: "Gestão de Processos",
  CRT0556: "Gestão de Projetos",
  CRT0557: "Gestão de Recursos Hídricos",
  CRT0558: "Gestão de Resíduos Sólidos",
  CRT0559: "Inovação na Construção",
  CRT0560: "Instalações Elétricas Prediais",
  CRT0563: "Obras Subterrâneas",
  CRT0564: "Pontes",
  CRT0565: "Projeto de Redes de Águas de Abastecimento",
  CRT0566: "Projeto de Reforço Estrutural",
  CRT0567: "Projeto e Construção da Infraestrutura Aeroportuária",
  CRT0568: "Reformas Prediais",
  CRT0570: "Saneamento e Saúde",
  CRT0571: "Sistemas de Tratamento de Águas de Abastecimento",
  CRT0572: "Sistema de Tratamento de Águas Residuárias",
  CRT0573: "Técnicas de Caracterização em Materiais",
  CRT0575: "Tópicos Especiais em Engenharia de Transportes",
  CRT0576: "Tópicos Especiais em Estruturas",
  CRT0577: "Tópicos Especiais em Geotecnia",
  CRT0579: "Transporte Público Urbano",
  CRT0580: "Avaliações de Impactos Ambientais",
  CRT0581: "Mecânica das Rochas",
  CRT0582: "Atividades Complementares",
  CRT0953: "Projeto Final de Curso I",
  CRT0954: "Projeto Final de Curso II",
  CRT0959: "Introdução à Engenharia Ambiental e Sanitária",
  CRT0960: "Fundamentos da Economia e Administração",
  CRT0962: "Ecologia",
  CRT0963: "Microbiologia Aplicada",
  CRT0964: "Química Analítica Aplicada",
  CRT0965: "Economia Ecológica",
  CRT0966: "Legislação Ambiental",
  CRT0967: "Sistemas de Tratamento de Águas Residuárias",
  CRT0971: "Planejamento e Licenciamento Ambiental",
  CRT0972: "Projeto Integrador II - Educação Ambiental",
  CRT0973: "Projeto Integrador III - Diagnóstico Ambiental e Sanitário",
  CRT0974: "Atividades Complementares",
  CRT0976: "Reúso das Águas",
  CRT0977: "Gestão de Projetos",
  CRT0978: "Engenharia Econômica",
  CRT0979: "Estruturas de Contenção",
  CRT0980: "Recursos Naturais Energéticos",
  CRT0981: "Tópicos Especiais de Engenharia Ambiental e Sanitária I",
  CRT0982: "Introdução à Análise Estatística de Experimentos",
};

export function getDashboardData(alunos) {
  const total = alunos.length;

  const retidos = alunos.filter(
    (a) => Number(a.quantidade_de_reprovações) > 10,
  ).length;

  return {
    total,
    retidos,
    taxa: total > 0 ? ((retidos / total) * 100).toFixed(2) : "0.00",
  };
}

export function isRetido(aluno) {
  if (!aluno || !aluno.curso) return false;

  const semestre = Number(aluno.semestre_em_que_o_aluno_está);

  if (aluno.curso.includes("ENGENHARIA")) {
    return semestre > 10;
  }

  return semestre > 8;
}

export function getRetencaoPorCurso(alunos) {
  const mapa = {};

  alunos.forEach((aluno) => {
    const curso = aluno.curso || "Desconhecido";

    if (!mapa[curso]) {
      mapa[curso] = {
        curso,
        total: 0,
        retidos: 0,
      };
    }

    mapa[curso].total++;

    if (isRetido(aluno)) {
      mapa[curso].retidos++;
    }
  });

  return Object.values(mapa);
}

export function getEvolucaoRetencao(alunos) {
  const mapa = {};

  alunos.forEach((aluno) => {
    if (!aluno.ano_de_ingresso) return;

    const ano = Math.floor(Number(aluno.ano_de_ingresso));

    if (!mapa[ano]) {
      mapa[ano] = {
        ano,
        total: 0,
        retidos: 0,
      };
    }

    mapa[ano].total++;

    if (isRetido(aluno)) {
      mapa[ano].retidos++;
    }
  });

  return Object.values(mapa)
    .map((item) => ({
      ...item,
      taxa: item.total > 0 ? item.retidos / item.total : 0,
    }))
    .sort((a, b) => a.ano - b.ano);
}

export function getRetidosPorAno(alunos) {
  const mapa = {};

  alunos.forEach((aluno) => {
    if (!aluno.ano_de_ingresso) return;

    const ano = Math.floor(Number(aluno.ano_de_ingresso));

    if (!mapa[ano]) {
      mapa[ano] = {
        ano,
        retidos: 0,
      };
    }

    if (isRetido(aluno)) {
      mapa[ano].retidos++;
    }
  });

  return Object.values(mapa).sort((a, b) => a.ano - b.ano);
}

export function getRankingDisciplinas(alunos, limit = null) {
  const mapa = {};

  alunos.forEach((aluno) => {
    Object.keys(aluno).forEach((key) => {
      if (key.startsWith("reprovado_vezes_")) {
        const codigo = key.replace("reprovado_vezes_", "");

        const nome = DISCIPLINAS_MAP[codigo] || codigo;

        if (!mapa[codigo]) {
          mapa[codigo] = {
            disciplina: nome,
            total: 0,
          };
        }

        mapa[codigo].total += aluno[key];
      }
    });
  });

  const resultado = Object.values(mapa).sort((a, b) => b.total - a.total);

  return limit ? resultado.slice(0, limit) : resultado;
}

export function getTaxaRetencaoTempo(alunos) {
  const ativos = alunos.filter((a) => a.semestre_em_que_o_aluno_está > 0);

  const retidosTempo = ativos.filter((a) => {
    const prazo = Number(a.prazo_para_terminar_o_curso);
    const ch = Number(a.ch_total);

    if (!prazo || !ch) return false;

    return ch > prazo;
  });

  return ativos.length > 0 ? (retidosTempo.length / ativos.length) * 100 : 0;
}

export function getTaxaRetencaoDesempenho(alunos) {
  const ativos = alunos.filter((a) => a.semestre_em_que_o_aluno_está > 0);

  const retidosDesempenho = ativos.filter((a) => {
    const media = Number(a.media_das_notas);

    if (!media) return false;

    return media < 6;
  });

  return ativos.length > 0
    ? (retidosDesempenho.length / ativos.length) * 100
    : 0;
}

export function getTaxaReprovacao(alunos) {
  let totalReprovacoes = 0;
  let totalDisciplinas = 0;

  alunos.forEach((aluno) => {
    Object.keys(aluno).forEach((key) => {
      if (key.startsWith("reprovado_vezes_")) {
        totalReprovacoes += Number(aluno[key]) || 0;
      }

      if (key.startsWith("CRT") && !key.startsWith("reprovado_vezes_")) {
        totalDisciplinas += Number(aluno[key]) || 0;
      }
    });
  });

  return totalDisciplinas > 0 ? (totalReprovacoes / totalDisciplinas) * 100 : 0;
}

export function getTotalDisciplinas(alunos) {
  const disciplinas = new Set();

  alunos.forEach((aluno) => {
    Object.keys(aluno).forEach((key) => {
      if (key.startsWith("CRT") && !key.startsWith("reprovado_vezes_")) {
        disciplinas.add(key);
      }
    });
  });

  return disciplinas.size;
}

export function getRelacaoIRAReprovacoes(alunos) {
  return alunos
    .filter(
      (a) =>
        a.ira !== undefined &&
        a.quantidade_de_reprovações !== undefined
    )
    .map((a) => ({
      ira: Number(a.ira),
      reprovacoes: Number(a.quantidade_de_reprovações),
    }));
}

export function getMediaIRA(alunos, filtro = null) {
  if (!alunos.length) return 0;

  const base = filtro ? alunos.filter(filtro) : alunos;

  if (!base.length) return 0;

  const soma = base.reduce(
    (acc, a) => acc + Number(a.ira || 0),
    0
  );

  return soma / base.length;
}