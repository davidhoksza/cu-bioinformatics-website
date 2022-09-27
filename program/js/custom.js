function ellipsis (id) {

    if (id == "what-to-study")
        text = "Je pro vás připraven bionformatický studijní program skládající se z bakalářského a navazujícího magisterského studia. Program vás provede dynamicky se vyvíjející oblastí bioinformatiky od základů biologie, informatiky a matematiky, přes analýzu struktury a funkce makromolekul, strojové učení a modelování systémů až po pokročilé oblasti bioinformatiky jako jsou metody sekvenování DNA, strukutrní bioinformatika nebo počítačový návrh léčiv. Naučíte se jak práci v laboratoři tak vývoji softwarových systému. Studium v bakalářském oboru je zajišťováno z poloviny na PřF a z poloviny na MFF UK a skladba předmětů tomu také odpovídá. Nejde tedy o výuku bioinformatiky z hlediska čistě informatického nebo biologického, ale o opravdovou synergii. Na výuce magisterského oboru se pak formou přednášek podílejí odborníci z Evropské molekulárně biologické laboratoře (EMBL) v Heidelbergu a Max Planck Institutu (MPI) pro molekulární buněčnou biologii a genetiku v Drážďanech.";

    if (id == "study-uk")
        text ="Studium na Univerzitě Karlově v Praze vám dá přístup nejen k široké škále kurzů, ale i možnost vycestovat do zahraničí v rámci zahraničních stipendijních pobytů na špičkových zahraničních pracovištích. Ale univerzitní život není jenom studium a proto poskytuje Univerzita Karlova i mnoho možností sportovního a společenského vyžití.";

    if (id == "know-how")
        text = "Po dokončení bakalářského studia budete rozumět biologickým procesům a budete schopni navrhnout a implementovat nástroje, které nad těmito daty pracují. Nicméně spektrum předmětů je navrženo tak, že už po absolvování bakalářského programu bioinformatka budete schopni bez nejmenších problémů nalézt uplatnění jako programátor, datový expert či technik v diagnostické nebo vědecké laboratoři." +
            "<br/><br/>Unikátní syntéza informatických a biologických znalostí dovolí absolventovi magisterského programu uplatnění v oblastech vývoje pokročilých bioinformatických systémů uplatnitelných jak v akademické, veřejné nebo komerční sféře. Absolvent je kvalitně připraven pro navazující doktorské studium bioinformatiky i příbuzných informatických či biologických oborů.  Absolvent najde uplatnění při analýze sekvenčních či dalších velkoobjemových dat nejen v nemocnicích a jiných lékařských zařízeních. Absolvent se může dále uplatnit ve farmaceutickém průmyslu či v biotechnologických firmách, specializujících se především na zemědělství."

    var myid = document.getElementById(id);
    if (myid.innerHTML.indexOf("...") != -1) myid.innerHTML = text
    else myid.innerHTML = text.substring(0, 300) + '...';
}

