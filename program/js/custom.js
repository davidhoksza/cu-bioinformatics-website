function ellipsis (id) {

    if (window.language == 'cz') {
        if (id == "what-to-study")
            text = "Je pro vás připraven bionformatický studijní program skládající se z bakalářského a navazujícího magisterského studia. Program vás provede dynamicky se vyvíjející oblastí bioinformatiky od základů biologie, informatiky a matematiky, přes analýzu struktury a funkce makromolekul, strojové učení a modelování systémů až po pokročilé oblasti bioinformatiky jako jsou metody sekvenování DNA, strukutrní bioinformatika nebo počítačový návrh léčiv. Naučíte se jak práci v laboratoři tak vývoji softwarových systému. Studium v bakalářském oboru je zajišťováno z poloviny na PřF a z poloviny na MFF UK a skladba předmětů tomu také odpovídá. Nejde tedy o výuku bioinformatiky z hlediska čistě informatického nebo biologického, ale o opravdovou synergii. Na výuce magisterského oboru se pak formou přednášek podílejí odborníci z Evropské molekulárně biologické laboratoře (EMBL) v Heidelbergu a Max Planck Institutu (MPI) pro molekulární buněčnou biologii a genetiku v Drážďanech.";
        if (id == "study-uk")
            text ="Studium na Univerzitě Karlově v Praze vám dá přístup nejen k široké škále kurzů, ale i možnost vycestovat do zahraničí v rámci zahraničních stipendijních pobytů na špičkových zahraničních pracovištích. Ale univerzitní život není jenom studium a proto poskytuje Univerzita Karlova i mnoho možností sportovního a společenského vyžití.";
        if (id == "know-how")
            text = "Po dokončení bakalářského studia budete rozumět biologickým procesům a budete schopni navrhnout a implementovat nástroje, které nad těmito daty pracují. Nicméně spektrum předmětů je navrženo tak, že už po absolvování bakalářského programu bioinformatka budete schopni bez nejmenších problémů nalézt uplatnění jako programátor, datový expert či technik v diagnostické nebo vědecké laboratoři." +
                "<br/><br/>Unikátní syntéza informatických a biologických znalostí dovolí absolventovi magisterského programu uplatnění v oblastech vývoje pokročilých bioinformatických systémů uplatnitelných jak v akademické, veřejné nebo komerční sféře. Absolvent je kvalitně připraven pro navazující doktorské studium bioinformatiky i příbuzných informatických či biologických oborů.  Absolvent najde uplatnění při analýze sekvenčních či dalších velkoobjemových dat nejen v nemocnicích a jiných lékařských zařízeních. Absolvent se může dále uplatnit ve farmaceutickém průmyslu či v biotechnologických firmách, specializujících se především na zemědělství."    
    } else {
        if (id == "what-to-study")
            text = "We prepared for you a bioinformatics study programme consisting of bachelor's, follow-up master's and even doctoral degree. The programme will guide you through the dynamically evolving bioinformatics field starting with the biology, computer science and mathematics foundations going through macromolecule structure analysis and function, machine learning and systems modeling up to advanced bioinformatics areas such as DNA sequencing and analysis, structural bioinformatics or (computational) drug discovery. You will learn how to work in the lab as well as how to develop software systems. The study in the bachelor's degree is secured half and half by Faculty of Science and Faculty of Mathematics and Physics, and this fact is also reflected in the composition of the courses. When teaching bioinformatics, we do not put emphasis on either computer science or biology, but we strive for true synergy. The master's degree is then provided partially by experts from European Molecular Biology Laboratory (EMBL) Heidelberg and Max Planck Institute of Molecular Cell Biology and Genetics (MPI-CBG) Dresden.";

        if (id == "study-uk")
            text = "Study at Charles University not only gives you access to a wide range of courses, but also gives you the chance to spend some time at the top foreign research institutions. But the university life is not just study and therefore Charles University also offers many sport and social activities.";

        if (id == "know-how")
            text = "After finishing the bachelor studies you will understand biological process and the underlying data and you will be able to design and implement software tools dealing with these data. However, the spectrum of courses is designed in such a way that you won't have even the slightest problem to find a career as a programmer, data expert or technician in a diagnostic or research laboratory." +
                "<br/><br/>Unique combination of biological and informatics skills allows the graduates of the master's and doctoral programme to find a career in areas requiring knowledge of the development of bionformatics systems that can be used in academia, public sector or industry. The graduates are well prepared for the follow-up doctoral studies of bioinformatics or related biology-related or informatics specializations. They will be able to analyze sequencing of other types of big data comming not only from hospitals and other medical facilities. Moreover, the graduates can find career in pharmaceutical industry or in biotechnological companies specializing on agriculture and other fields.";
    }
    
    const myid = document.getElementById(id);
    if (myid.innerHTML.indexOf("...") != -1) myid.innerHTML = text
    else myid.innerHTML = text.substring(0, 300) + '...';
}



document.addEventListener('DOMContentLoaded', () => document.querySelector('#copyright').textContent += new Date().getFullYear());
