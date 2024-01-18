---
sidebar_position: 1
title: Państwa - Podstawy
---

![Podstawy](./img/podstawy.png)
## Jak działa plugin?
- Mapa podzielona jest na prowincje wyświetlane na naszej [dynmapie](https://mapa.kartelore.pl/), takie jak w grze Europa Universalis 4.
- Każda prowincja ma swój unikalny zasób:
	- **Surowce**: wykopuj dane rudy z kamienia (złoto, węgiel, ...)
	- **Plony**: z większym powodzeniem wyrastaj dane plony w prowincji (pszenica, ziemniaki, ...)
	- **Zwierzęta**: z większym powodzeniem rozmnażaj dane zwierzęta w prowincji (owce, krowy, ...)
- Gracze tworzą miasta i zajmują prowincje, by korzystać z zasobów tych prowincji.
- Podczas wojny możesz przejmować prowincje innych miast.

:::info Informacja
Szansa na wydropienie surowca z danej rudy wynosi jedynie 50%, więc żeby zdobyć dany surowiec czasami trzeba handlować. Przez to plugin znacznie pogłębia handel miedzy graczami.
:::

## Jak stworzyć miasto?
1. Udaj się do prowincji gdzie chcesz stworzyć miasto.
2. Wpisz komendę **/miasto stworz `nazwa miasta`**, zamień **`nazwa miasta`** na nazwę miasta, którą chcesz ustawić.
3. Zaproś do swojego miasta graczy używając komendy **/miasto zapros `nazwa gracza`**.
4. Zwiąż się sojuszem z innymi miastami, używając **/sojusz [nazwa miasta]**.

:::caution Uwaga!
Po usunięciu, bądź utracie miasta możesz zrobić kolejne po upływie 12 godzin!
:::

:::info Informacja
Aby zobaczyć układ prowincji na mapie możesz użyć komend **/miasto mapa**, **/miasto minimapa** lub wejść na stronę [dynmapy serwera](https://mapa.kartelore.pl/).
:::

## Jak zajmować prowincje?
- Aby zająć prowincje, udaj się na nią i na jej obszarze użyj komendy **/miasto zajmij**.
- Jeżeli po jakimś czasie chcesz pozbyć się prowincji wpisz **/miasto porzuc**.
- Po zajęciu prowincji miasto nie może zająć kolejnej przez następne 30 minut.

:::info  Informacja
Zajęcie prowincji nie jest darmowe, kosztuje ono **power**. Co 30 minut każdy gracz, który należy do miasta otrzymuje 4 powera. Nowo stworzone miasto otrzymuje 30 powera. Cena prowincji w powerze wyświetlona jest na stronie [mapy serwera](https://mapa.kartelore.pl/) po wybraniu trzeciej opcji z zakładki **Opcje Mapy:**. Zajęcie pierwszej prowincji (jeżeli ta kosztuje więcej niż 30 powera) jest bezwarunkowe, jednak wiąże się z dużą karą surowcową. Zajęcie kolejnych prowincji wymaga od miasta posiadania powera większego od kosztu wszystkich zajętych już prowincji.
:::
:::caution Uwaga!
Na serwerze występuje sytem anty-AFK. Ma on na celu zapobiec bezsensownemu zdobywaniu powera. System ten wyrzuca gracza po 15 minutach nie ruszania się.
:::

## Jak sprawdzić zasoby prowincji?
Zasoby prowincji można sprawdzić na 2 sposoby albo przez wpisanie komendy **/nodes terytorium `ID`**, albo poprzez wejście na stronę [mapy serwera](https://mapa.kartelore.pl/), wybranie prowincji lewym przyciskiem myszy oraz najechanie na ikonkę surowca w lewym dolnym rogu.

## Przychód Miasta
Każda prowincja z ustalonym przychodem, co godzinę generuje surowce, które można odebrać używając komendy **/miasto przychod**. Używając tej komendy można odebrać zasoby z całego miasta bez konieczności przemieszczania się do poszczególnych prowincji. Podczas okupacji, okupant otrzymuje jedynie 40% zasobów prowincji.

## Co to jest państwo?
W użytym przez nas pluginie państwo to związek miast. Gracze państwa mogą korzystać z zasobów innych miast państwa oraz mogą na terenie tych miast budować i niszczyć bloki. Gracze danego miasta w państwie nie mogą odbierać **income'u** innego miasta. Aby zaprosić inne miasta lub państwa do twojego państwa użyj komendy **/panstwo zapros `nazwa`**.

## Jak stworzyć państwo?
Tworzenie państwa odbywa się poprzez złożenie wniosku na naszym serwerze Discord, aby to zrobić trzeba kolejno:
1. Udaj się na kanał **#zgłoś-państwo** i naszykuj sobie odpowiedzi na dany formularz.
2. Wciśnij przycisk Zgłoś państwo w wiadomości od bota, przejdź na utworzony przez niego kanał, przeczytaj jego wiadomość oraz wyślij swoje odpowiedzi.
3. Poczekaj na odpowiedź administracji na utworzonym kanale. Administracja może zadać Ci parę pytań, a następnie po podaniu przyczyny zatwierdzić lub odrzucić twój wniosek.
4. Utworzone państwo zostanie ogłoszone przez administratora na kanale **#państwa**, jednak możesz dodatkowo napisać o tym na kanale **#ogłoszenia-rp**.










