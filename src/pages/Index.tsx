import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.6), rgba(31, 41, 55, 0.6)), url('https://cdn.poehali.dev/projects/37e28781-3293-4785-ac35-d8db33ecfb6d/files/d2fc599d-5bc4-41f4-be16-34bb85c60767.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Вернуться в Усть-Катав — <br />не шаг назад, а уверенный старт
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Узнай, почему твой родной город — идеальное место для качественного образования и яркой студенческой жизни
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6">
            <Icon name="Download" className="mr-2" size={24} />
            Скачать памятку
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Почему Усть-Катав для учебы?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Здесь тебя ждут не только воспоминания, но и возможности
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Финансовая свобода</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Низкие затраты — высокое качество жизни. Обучение в филиалах вузов рядом с домом. Трати деньги на саморазвитие, а не на выживание.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-secondary to-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Персональный подход</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ты — личность, а не номер в списке. Небольшие группы, доступность преподавателей. Здесь знают твое имя и помогают раскрыть потенциал.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent to-orange-600 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Практика с первого курса</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Теория + практика = востребованность. Усть-Катавский завод — твоя производственная база. Стажировки и трудоустройство рядом с домом.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🌳</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Жизнь в ритме ЭКО</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Здоровый образ жизни как норма. Чистый воздух, река Юрюзань, леса и горы. Спортивные секции и отдых на природе в 15 минутах от дома.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Твои шаги к успеху
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Как построить карьеру, не уезжая?
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Выбери направление</h3>
                <p className="text-muted-foreground mb-3">
                  Усть-Катавский филиал ЮУрГУ, местные колледжи, центры профподготовки — все рядом с домом.
                </p>
                <Button variant="outline" className="mt-2">
                  <Icon name="ExternalLink" className="mr-2" size={18} />
                  Посмотреть программы
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Получи поддержку</h3>
                <p className="text-muted-foreground mb-3">
                  Муниципальные гранты, стипендии и программы поддержки молодежи помогут на старте.
                </p>
                <Button variant="outline" className="mt-2">
                  <Icon name="BadgeDollarSign" className="mr-2" size={18} />
                  Узнать о грантах
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Найди единомышленников</h3>
                <p className="text-muted-foreground mb-3">
                  Молодежная палата, волонтерские движения, IT-сообщество, клубы предпринимателей.
                </p>
                <Button variant="outline" className="mt-2">
                  <Icon name="Users" className="mr-2" size={18} />
                  Присоединиться
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Начни работать</h3>
                <p className="text-muted-foreground mb-3">
                  Портал "Работа в России" и вакансии УКВЗ для студентов — твой старт в карьере.
                </p>
                <Button variant="outline" className="mt-2">
                  <Icon name="Briefcase" className="mr-2" size={18} />
                  Найти вакансии
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Мифы и правда
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Развеиваем сомнения
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="X" className="text-red-500" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Миф</h3>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "В маленьком городе нет перспектив"
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Check" className="text-green-500" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Правда</h3>
                </div>
                <p className="text-muted-foreground">
                  Перспективы есть там, где есть инициатива. Меньше конкуренции — больше шансов проявить себя и занять ответственные позиции.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="X" className="text-red-500" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Миф</h3>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Здесь негде отдыхать"
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Check" className="text-green-500" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Правда</h3>
                </div>
                <p className="text-muted-foreground">
                  Кино, кафе, мероприятия в ДК, набережная, спорт, походы, сообщества по интересам. Создавай свой круг общения!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 hover:border-accent transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="X" className="text-red-500" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Миф</h3>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Я останусь здесь навсегда"
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Check" className="text-green-500" size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Правда</h3>
                </div>
                <p className="text-muted-foreground">
                  Получив качественное образование с практикой, ты можешь работать откуда угодно. Усть-Катав — надежный трамплин!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Истории успеха
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Они остались и не пожалели
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/869444c1-9e22-4723-8df4-efa41a3c1736.jpg" 
                  alt="Самвел Григорян"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  style={{objectPosition: 'center 20%'}}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Самвел Григорян, 30</h3>
                <p className="text-primary font-semibold mb-3">Системный предприниматель</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Развиваю социальные медиа-проекты в городе и строю бизнесы в области развлечений на благо жителей, обустраивая городскую инфраструктуру. Работаю с командой единомышленников, и приношу реальный результат здесь и сейчас, на что в мегаполисе ушли бы десятилетия."
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/eb54ddfc-cc65-4843-b360-fce1552954c6.jpg" 
                  alt="Анна Петрова"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{objectPosition: 'center 30%'}}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Екатерина Смирнова, 22</h3>
                <p className="text-secondary font-semibold mb-3">Инженер по путевому измерению, РЖД</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Я закончила обучение в Уфимском железнодорожном техникуме и сразу вышла на работу в дистанцию пути. За короткий срок прошла путь от сигналиста пути до инженера, что в любом крупном городе было попросту невозможно, а тут всегда есть возможность карьерного роста и реализации своего потенциала."
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/572651f8-8a1d-4112-9e61-62e5ea65c42b.jpg" 
                  alt="Мария Кузнецова"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{objectPosition: 'center 25%'}}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Александра Фролова, 31</h3>
                <p className="text-accent font-semibold mb-3">Педагог областного центра доп. образования</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Закончила ЮУрГУ, по профессии металлург, получила качественное образование и базу для новых карьерных перспектив. Нашла призвание в педагогике, гибкость и стратегическое мышление, что мне дали в нашем Вузе, очень помогли мне в создании сильных и практикоориентированных занятий для 225 учащихся нашего города."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Твое будущее начинается здесь и сейчас
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Сделай осознанный выбор!
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6">
              <Icon name="Download" className="mr-2" size={24} />
              Скачать памятку (PDF)
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold text-lg mb-2">Контакты</h3>
              <p className="text-gray-300">
                Отдел по делам молодежи<br />
                +7 (XXX) XXX-XX-XX<br />
                molodezh@ust-katav.ru
              </p>
            </div>

            <div className="text-center">
              <Icon name="MapPin" className="mx-auto mb-3 text-secondary" size={32} />
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-gray-300">
                г. Усть-Катав<br />
                Челябинская область<br />
                Россия
              </p>
            </div>

            <div className="text-center">
              <Icon name="Globe" className="mx-auto mb-3 text-accent" size={32} />
              <h3 className="font-bold text-lg mb-2">Социальные сети</h3>
              <div className="flex justify-center gap-4 mt-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Icon name="MessageCircle" size={24} />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-2">
              #УстьКатав #ПамяткаВыпускника #ВернутьсяВУК #БудущееЗдесь
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 Администрация Усть-Катавского городского округа
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;