"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "en" | "ru" | "uk";
type NavMode = "hero" | "visible" | "hidden";

const languages: { code: Language; label: string; title: string }[] = [
  { code: "en", label: "EN", title: "English" },
  { code: "ru", label: "RU", title: "Русский" },
  { code: "uk", label: "UA", title: "Українська" },
];

const skills = ["Next.js", "React", "TypeScript", "Node.js", "REST API", "Prisma ORM", "SQL / SQLite", "JWT & Auth"];

const copy = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", talk: "Let's talk" },
    available: "Available for freelance projects",
    heroTitle: "I build web products", heroConnector: "that", heroEmphasis: "work.",
    heroCopy: "Full-Stack Developer focused on fast, clean and reliable websites and web applications — frontend, backend, APIs and databases.",
    viewWork: "View selected work", email: "Email me", role: "Full-Stack Developer",
    based: "Based in Ukraine", remote: "Remote worldwide", coreSkills: "Core skills",
    selectedWork: "Selected work", projectHeading: "One project.", projectAccent: "Full-stack scope.",
    projectIntro: "A focused case study showing product thinking, UI work, backend logic, authentication and database design in one working product.",
    projectType: "Personal project · 2026",
    projectDescription: "A complete e-commerce application with product catalog, secure authentication, cart, checkout, order history and admin tools.",
    features: ["USER / ADMIN roles", "JWT in httpOnly cookie", "Transactional orders", "Responsive interface"],
    viewProject: "View project on GitHub",
    servicesKicker: "What I do", servicesHeading: "Useful work.", servicesAccent: "No extra noise.",
    servicesIntro: "I can take a clear task, build the solution and explain the result without turning the process into unnecessary complexity.",
    services: [
      ["Full-stack development", "Websites and web applications — from a responsive interface to API, database and deployment-ready code."],
      ["Existing project improvements", "Bug fixes, new features, UI updates and careful work inside an existing codebase."],
      ["Automation & integrations", "APIs, routine workflow automation and practical AI integrations where they create real value."],
    ],
    about: "About", aboutHeading: "Building the whole product,", aboutAccent: "not just one layer.",
    aboutOne: "I work across frontend and backend: responsive interfaces, application logic, APIs, authentication and databases. I care about understandable code and a result that is easy to use.",
    aboutTwo: "I use AI tools for quickly handling routine tasks while keeping decisions, checks and final quality under human control.",
    principles: ["Clear communication", "Practical solutions", "Honest project scope"],
    contactKicker: "Have a project?", contactHeading: "Let's build something", contactAccent: "useful.", back: "Back to top",
  },
  ru: {
    nav: { work: "Работы", services: "Услуги", about: "Обо мне", talk: "Связаться" },
    available: "Открыт для фриланс-проектов",
    heroTitle: "Создаю веб-продукты", heroConnector: "которые", heroEmphasis: "работают.",
    heroCopy: "Full-Stack разработчик, создающий быстрые, понятные и надёжные сайты и веб-приложения — фронтенд, бэкенд, API и базы данных.",
    viewWork: "Смотреть работы", email: "Написать мне", role: "Full-Stack разработчик",
    based: "Нахожусь в Украине", remote: "Работаю по всему миру", coreSkills: "Основной стек",
    selectedWork: "Избранная работа", projectHeading: "Один проект.", projectAccent: "Полный full-stack.",
    projectIntro: "Подробный кейс, объединяющий продуктовое мышление, интерфейс, серверную логику, аутентификацию и проектирование базы данных.",
    projectType: "Личный проект · 2026",
    projectDescription: "Полноценное e-commerce приложение с каталогом, безопасной авторизацией, корзиной, оформлением заказа, историей покупок и панелью администратора.",
    features: ["Роли USER / ADMIN", "JWT в httpOnly cookie", "Транзакционные заказы", "Адаптивный интерфейс"],
    viewProject: "Открыть проект на GitHub",
    servicesKicker: "Что я делаю", servicesHeading: "Полезная работа.", servicesAccent: "Без лишнего шума.",
    servicesIntro: "Беру понятную задачу, создаю решение и объясняю результат, не превращая процесс в ненужную сложность.",
    services: [
      ["Full-stack разработка", "Сайты и веб-приложения — от адаптивного интерфейса до API, базы данных и готового к развёртыванию кода."],
      ["Развитие существующих проектов", "Исправление ошибок, новые функции, обновление интерфейса и аккуратная работа в существующей кодовой базе."],
      ["Автоматизация и интеграции", "API, автоматизация рутинных процессов и практичные AI-интеграции там, где они приносят реальную пользу."],
    ],
    about: "Обо мне", aboutHeading: "Создаю продукт целиком,", aboutAccent: "а не один слой.",
    aboutOne: "Работаю с фронтендом и бэкендом: адаптивными интерфейсами, логикой приложений, API, аутентификацией и базами данных. Ценю понятный код и удобный результат.",
    aboutTwo: "Использую AI-инструменты для ускорения рутинных задач, сохраняя решения, проверку и итоговое качество под контролем человека.",
    principles: ["Понятная коммуникация", "Практичные решения", "Честная оценка проекта"],
    contactKicker: "Есть проект?", contactHeading: "Давайте создадим что-то", contactAccent: "полезное.", back: "Наверх",
  },
  uk: {
    nav: { work: "Роботи", services: "Послуги", about: "Про мене", talk: "Зв'язатися" },
    available: "Відкритий до фриланс-проєктів",
    heroTitle: "Створюю вебпродукти", heroConnector: "які", heroEmphasis: "працюють.",
    heroCopy: "Full-Stack розробник, зосереджений на швидких, зрозумілих і надійних сайтах та вебзастосунках — фронтенді, бекенді, API й базах даних.",
    viewWork: "Переглянути роботи", email: "Написати мені", role: "Full-Stack розробник",
    based: "Перебуваю в Україні", remote: "Працюю по всьому світу", coreSkills: "Основний стек",
    selectedWork: "Обрана робота", projectHeading: "Один проєкт.", projectAccent: "Повний full-stack.",
    projectIntro: "Докладний кейс, що поєднує продуктове мислення, інтерфейс, серверну логіку, автентифікацію та проєктування бази даних.",
    projectType: "Особистий проєкт · 2026",
    projectDescription: "Повноцінний e-commerce застосунок із каталогом, безпечною авторизацією, кошиком, оформленням замовлення, історією покупок і панеллю адміністратора.",
    features: ["Ролі USER / ADMIN", "JWT в httpOnly cookie", "Транзакційні замовлення", "Адаптивний інтерфейс"],
    viewProject: "Відкрити проєкт на GitHub",
    servicesKicker: "Що я роблю", servicesHeading: "Корисна робота.", servicesAccent: "Без зайвого шуму.",
    servicesIntro: "Беру зрозуміле завдання, створюю рішення й пояснюю результат, не перетворюючи процес на зайву складність.",
    services: [
      ["Full-stack розробка", "Сайти та вебзастосунки — від адаптивного інтерфейсу до API, бази даних і готового до розгортання коду."],
      ["Розвиток наявних проєктів", "Виправлення помилок, нові функції, оновлення інтерфейсу й акуратна робота в наявній кодовій базі."],
      ["Автоматизація та інтеграції", "API, автоматизація рутинних процесів і практичні AI-інтеграції там, де вони створюють реальну цінність."],
    ],
    about: "Про мене", aboutHeading: "Створюю продукт цілком,", aboutAccent: "а не один шар.",
    aboutOne: "Працюю з фронтендом і бекендом: адаптивними інтерфейсами, логікою застосунків, API, автентифікацією та базами даних. Ціную зрозумілий код і зручний результат.",
    aboutTwo: "Використовую AI-інструменти для прискорення рутинних завдань, залишаючи рішення, перевірку та фінальну якість під контролем людини.",
    principles: ["Зрозуміла комунікація", "Практичні рішення", "Чесна оцінка проєкту"],
    contactKicker: "Є проєкт?", contactHeading: "Створімо разом щось", contactAccent: "корисне.", back: "Нагору",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [navMode, setNavMode] = useState<NavMode>("hero");
  const t = copy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language") as Language | null;
    if (saved && languages.some(({ code }) => code === saved)) {
      setLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let upwardDistance = 0;

    function updateNavigation() {
      const currentY = window.scrollY;
      const hero = document.getElementById("top");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight - 80 : 640;

      if (currentY <= heroBottom) {
        upwardDistance = 0;
        setNavMode("hero");
      } else {
        const delta = currentY - lastY;
        if (delta > 3) {
          upwardDistance = 0;
          setNavMode("hidden");
        } else if (delta < -1) {
          upwardDistance += Math.abs(delta);
          if (upwardDistance >= 8) setNavMode("visible");
        }
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", updateNavigation, { passive: true });
    updateNavigation();
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  function changeLanguage(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("portfolio-language", next);
    document.documentElement.lang = next;
  }

  return (
    <main data-language={language}>
      <div className="navSlot">
      <div className={`navBar navBar--${navMode}`}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="BozemenOfficial — home">BO<span>.</span></a>
        <div className="navLinks"><a href="#work">{t.nav.work}</a><a href="#services">{t.nav.services}</a><a href="#about">{t.nav.about}</a></div>
        <div className="navActions">
          <div className="languageSwitch" aria-label="Language selector">
            {languages.map(({ code, label, title }) => <button key={code} type="button" title={title} aria-pressed={language === code} onClick={() => changeLanguage(code)}>{label}</button>)}
          </div>
          <a className="navCta" href="mailto:nikolasdusyk.99@gmail.com">{t.nav.talk} <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
      </div>
      </div>

      <section className="hero shell" id="top">
        <div className="heroMain">
          <p className="eyebrow"><span /> {t.available}</p>
          <h1>{t.heroTitle}<br />{t.heroConnector} <em>{t.heroEmphasis}</em></h1>
          <p className="heroCopy">{t.heroCopy}</p>
          <div className="heroActions"><a className="button primary" href="#work">{t.viewWork} <span>↓</span></a><a className="button secondary" href="mailto:nikolasdusyk.99@gmail.com">{t.email}</a></div>
        </div>
        <aside className="heroAside" aria-label="Developer profile summary">
          <div className="avatarWrap"><img src="https://github.com/BozemanChannel.png?size=512" alt="BozemenOfficial GitHub profile photo" /></div>
          <div className="statusCard"><span className="statusDot" /><div><b>BozemenOfficial</b><small>{t.role}</small></div></div>
          <div className="heroMeta"><span>{t.based}</span><span>{t.remote}</span></div>
        </aside>
      </section>

      <div className="ticker" aria-label={t.coreSkills}><div className="tickerTrack">{[false, true].map((duplicate) => <div className="tickerGroup" aria-hidden={duplicate || undefined} key={String(duplicate)}>{skills.map((skill) => <span key={skill}>{skill}<i>✦</i></span>)}</div>)}</div></div>

      <section className="section shell" id="work">
        <div className="sectionHead"><div><p className="kicker">{t.selectedWork}</p><h2>{t.projectHeading}<br /><span>{t.projectAccent}</span></h2></div><p>{t.projectIntro}</p></div>
        <article className="projectCard">
          <div className="projectVisual"><Image src="/novashop-cover.png" alt="NovaShop full-stack e-commerce interface" fill priority sizes="(max-width: 900px) 100vw, 66vw" /><span className="projectType">{t.projectType}</span></div>
          <div className="projectInfo">
            <div className="projectTitleRow"><h3>NovaShop</h3><span>01</span></div><p>{t.projectDescription}</p>
            <ul className="featureList">{t.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className="tags">{["Next.js 15", "React 19", "TypeScript", "Prisma", "SQLite"].map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="textLink" href="https://github.com/BozemanChannel/novashop" target="_blank" rel="noreferrer">{t.viewProject} <span>↗</span></a>
          </div>
        </article>
      </section>

      <section className="servicesSection" id="services"><div className="shell">
        <div className="sectionHead light"><div><p className="kicker">{t.servicesKicker}</p><h2>{t.servicesHeading}<br /><span>{t.servicesAccent}</span></h2></div><p>{t.servicesIntro}</p></div>
        <div className="serviceGrid">{t.services.map(([title, text], index) => <article className="service" key={title}><span className="serviceNumber">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="about section shell" id="about">
        <div className="aboutLabel"><span>{t.about}</span><i /></div>
        <div className="aboutContent"><h2>{t.aboutHeading}<br /><em>{t.aboutAccent}</em></h2><div className="aboutColumns"><p>{t.aboutOne}</p><p>{t.aboutTwo}</p></div><div className="principles">{t.principles.map((principle, index) => <div key={principle}><b>0{index + 1}</b><span>{principle}</span></div>)}</div></div>
      </section>

      <footer>
        <div className="shell footerMain"><p className="kicker">{t.contactKicker}</p><h2>{t.contactHeading}<br /><em>{t.contactAccent}</em></h2><a className="footerEmail" href="mailto:nikolasdusyk.99@gmail.com">nikolasdusyk.99@gmail.com <span>↗</span></a></div>
        <div className="shell footerBottom"><span>© 2026 BozemenOfficial</span><a href="https://github.com/BozemanChannel" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">{t.back} ↑</a></div>
      </footer>
    </main>
  );
}
