---
sidebar_position: 5
title: Komendy
---

![Komendy](./img/komendy.png)

### Ustawienia czatu
Te ustawienia zmieniają twój **kanał czatu**, tzn. kiedy piszesz na czacie, tylko gracze z twojego miasta, państwa lub sojuszu zobaczą wiadomość.

- /czatglobalny (lub /gc): Ustawia czat na globalny (podstawowy, każdy widzi wiadomości).
	- /wyciszglobalny: Wycisza czat globalny.
	- /odciszglobalny: Odcisza czat globalny.
- /czatmiasta (lub /tc): Tylko gracze w twoim mieście widzą wiadomości.
- /czatpanstwa (lub /nc): Tylko gracze w twoim państwie widzą wiadomości.
- /czatsojuszu (lub /ac): Tylko gracze z sojuszu państwa bądź miasta$ widzą wiadomości.

### /miasto (lub /t)
Służy do zarządzania miastem gracza.

- /miasto: Wyświetla komendy związane z miastem.
- /miasto stworz `nazwa`: Służy do tworzenia nowego miasta z konkretną nazwą i prowincją.
- /miasto usun: Usuwa miasto (tylko dla lidera miasta).
- /miasto awans `nazwa`: Awansuje gracza na oficera miasta.
- /miasto degrad `nazwa`: Degraduje gracza z pozycji oficera miasta.
- /miasto lider `nazwa`: Oddaje przywództwo nad miastem innemu członkowi miasta.
- /miasto dolacz `miasto`: Prośba o dołączenie do miasta.
- /miasto zapros `gracz`: Zaprasza gracza do twojego miasta (tylko dla liderów i oficerów).
- /miasto opusc: Wychodzi z miasta.
- /miasto wyrzuc `gracz`: Wyrzuca innego gracza z twojego miasta (tylko dla liderów i oficerów).
- /miasto spawn: Teleportuje się do głównego spawnpointa miasta.
- /miasto ustawspawn: Zmienia spawnpoint twojego miasta na inną lokacje w głównej prowincji miasta$(homechunk) (tylko dla lidera miasta).
- /miasto lista: Wyświetla listę wszystkich miast.
- /miasto info: Wyświetla nazwę miasta, lidera, oficerów, residents i zajęte prowincje.
- /miasto info `miasto`: Wyświetla informacje innego miasta.
- /miasto online `miasto`: Wyświetla graczy online danego miasta.
- /miasto kolor [r] [g] [b]: Ustawia kolor miasta na dynmapie$ (tylko dla lidera).
- /miasto zajmij: Zajmuje prowincje dla twojego miasta (tylko dla liderów i oficerów)
- /miasto porzuc: Przestaje zajmować prowincję w której jesteś.
- /miasto przychod: Zbiera przychód miast i rafinerii (tylko dla liderów i oficerów).
- /miasto zmiennazwe [nowa nazwa]: Zmienia nazwę twojego miasta (tylko dla lidera miasta)
- /miasto mapa: Wyświetla mapę prowincji dla gracza na czat.
- /miasto minimapa [3|4|5]: Włącza/wyłącza widok chunków prowincji na minimapie po prawej stronie. Opcjonalnie możesz wybrać jej wielkość: 3, 4, 5.
- /miasto permisje [type] [group] [allow/deny]: Ustawia permisje dla interakcji w prowincji miasta. (typ, grupa, zezwól/odmów).
- /miasto ochrona: Toggle protecting/unprotecting chests with mouse click. Włącza chronienie lub usuwanie go na skrzynkach przyciskiem myszy.
- /miasto pokazochrone: Pokazuje chronione skrzynki z particlesami.
- /miasto ufaj `nazwa`: Ustawia gracza jako zaufanego (tylko dla liderów i oficerów).
- /miasto nieufaj `nazwa`: Ustawia gracza jako niezaufanego (tylko dla liderów i oficerów).
- /miasto stolica: Przesuwa stolice prowincji do miejsca w którym się znajdujesz (zmienia to też lokalizacje spawnu miasta).
- /miasto aneksja: Anektuje okupowaną prowincje i dodaje je do twojego miasta.

### /panstwo (lub /n)
Do zarządzania państwem gracza.

- /panstwo usun: Usuwa państwo (tylko dla lidera stolicy państwa)
- /panstwo opusc: Wychodzi z państwa (tylko dla lidera miasta).
- /panstwo stolica `miasto`: Ustawia inne miasto jako stolice twojego państwa.
- /panstwo zapros `miasto`: Zaprasza inne państwo do twojego państwa (tylko dla lidera stolicy państwa)
- /panstwo lista: Wyświetla listę wszystkich państw i ich miast.
- /panstwo kolor [r] [g] [b]: Ustawia kolor posiadanych prowincji prze państwo na dynmapie (tylko dla lidera stolicy państwa).
- /panstwo zmiennazwe `nazwa`: Zmienia nazwę państwa (tylko dla lidera stolicy państwa). 
- /panstwo online `państwo`: Sprawdza graczy online danego państwa.
- /panstwo info `państwo`: Sprawdza informacje państwa.
- /panstwo spawn `miasto`: Teleportuje się do miasta w państwie. Może to kosztować przedmioty.

### /sojusz `nazwa`
Zaoferuj/akceptuj sojusze z innymi miastami lub państwami.

- /sojusz `miasto`: zaoferuj/akceptuj sojusz z innym miastem.
- /sojusz `państwo`: zaoferuj/akceptuj sojusz z innym państwem.

### /rozwiazsojusz `nazwa`
Rozwiązuje sojusz z  miastem bądź państwem. Miasta wchodzą wtedy w okres rozejmu.

- /rozwiazsojusz `miasto`: Rozwiąż sojusz miastem.
- /rozwiazsojusz `państwo`: Rozwiąż sojusz państwem.

### /wojna `nazwa`
Wypowiada wojnę innym miastom lub państwom.

- /wojna `miasto`: Wypowiada wojne miastu.
- /wojna `państwo`: Wypowiada wojne państwu.

### /pokoj `nazwa`
Otwiera okno traktatu pokojowego z innym państwem bądź miastem.

- /pokoj `miasto`: Negocjuje traktat pokojowy z innym miastem.
- /pokoj `państwo`: Negocjuje traktat pokojowy z innym państwem.

### /rozejm
Wyświetla trwające rozejmy miasta z innymi miastami.

- /rozejm `miasto`: Wyświetla trwające rozejmy innego miasta.

### /nodess (lub /nd)
Do wyświetlania ogólnych informacji w Europie (prowincje z zasobami, prowincje, miasta, państwa, gracze).

- /nodess pomoc: Wyświetla listę wszystkich komend.
- /nodess zasoby `nazwa_zasobu`: Wyświetla wyszczególnione statystyki typów zasobów (Surowce, Plony, Zwierzęta)
- /nodess terytorium [id]: Wyświetla ogólne informacje innej prowincji za pomoca jego id.
- /nodes town: Wyświetla listę wszyskich miast, dokładniej ich liczbę graczy i liczbę prowincji.
- /nodess miasto `nazwa`: Wyświetla szczególne informacje o mieście (prowincje, gracze, itd...).
- /nodes nation: Wyświetla listę wszystkich państw.
- /nodess panstwo `nazwa`: Wyświetla ogólne informacje o państwie (miasta, sojusznicy, wrogowie, itd...).
- /nodess gracz `nazwa`: Wyświetla informacje o graczu (jego miasto i państwo).
- /nodess wojny: Wyświetla czy wojny są włączone/wyłączone.

### Rafinerie
Do wyświetlania ogólnych informacji o rafineriach.
- /refineria: Otwiera menu rafinerii w prowincji na której stoisz.
- /refineria pomoc: Wyświetla listę wszystkich komend.
- /refineria przepis `nazwa`: Wyświetla informację o recepturze rafinerii.
- /reifneria typ `nazwa`: Wyświetla informację o typu rafinerii.

### Porty
Do wyświetlania ogólnych informacji o portach. 
- /porty pomoc: Wyświetla listę wszystkich komend.
- /porty lista: Lista wszystkich portów.
- /porty info `nazwa portu`: Wyświetla informację o porcie.
- /port allow `neutral/ally/enemy`: Ustawia kto może teleportować się do portu (neutralny, sojusznik, wróg).
- /port fee: Ustawia cenę teleportowania się do portu.
- /port warp `nazwa` `potwierdzenie`: Teleport do portu.

### Pozostałe komendy
- /gracz `nick`: Wyświetla informacje o graczu.
- /terytorium `id`: Wyświetla informacje o terytorium.
