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

### /miasto
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

### /panstwo
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

### /sojusz
Zaoferuj/akceptuj sojusze z innymi miastami lub państwami.

- /sojusz `miasto`: zaoferuj/akceptuj sojusz z innym miastem.
- /sojusz `państwo`: zaoferuj/akceptuj sojusz z innym państwem.

### /rozwiazsojusz
Rozwiązuje sojusz z  miastem bądź państwem. Miasta wchodzą wtedy w okres rozejmu.

- /rozwiazsojusz `miasto`: Rozwiąż sojusz miastem.
- /rozwiazsojusz `państwo`: Rozwiąż sojusz państwem.

### /wojna
Wypowiada wojnę innym miastom lub państwom.

- /wojna `miasto`: Wypowiada wojne miastu.
- /wojna `państwo`: Wypowiada wojne państwu.

### /pokoj
Otwiera okno traktatu pokojowego z innym państwem bądź miastem.

- /pokoj `miasto`: Negocjuje traktat pokojowy z innym miastem.
- /pokoj `państwo`: Negocjuje traktat pokojowy z innym państwem.

### /rozejm
Wyświetla trwające rozejmy miasta z innymi miastami.

- /rozejm `miasto`: Wyświetla trwające rozejmy innego miasta.

### /nodess
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

:::caution Uwaga!
W razie problemów z polskim odpowiednikiem zalecamy spróbowanie angielskiej wersji komendy.
:::

# English version of commands

### Chat Settings
These change your chat channel so that when you type in chat, only members of your town, nation, or allies will see the message.

- /globalchat (or /gc): Set chat to global (default, everyone sees).
- /gc mute: Mute global chat
- /gc unmute: Unmute global chat
- /townchat (or /tc): Only town members see your chat messages.
- /nationchat (or /nc): Only nation members see your chat messages.
- /allychat (or /ac): Only town or nation allies see your chat messages.

### /town
For managing a player's town, intended to only be used ingame by players.

- /town create [name]: Create a new town with the specified name at location.
- /town delete: Delete your town. Town leaders only.
- /town promote [name]: Makes player a town officer.
- /town demote [name]: Removes player from town officers.
- /town leader [name]: Give town leadership to another player in town.
- /town apply [town]: Ask to join a town.
- /town invite [player]: Invite a player to join your town. Town leader and officers only.
- /town leave: Abandon membership in your town.
- /town kick [player]: Remove another player from your town. Town leader and officers only.
- /town spawn: Teleport to your town's main spawnpoint.
- /town spawn [outpost]: Teleport to an outpost's spawn point.
- /town setspawn: Change your town's spawnpoint to another location in the home territory. Town leader only.
- /town list: View list of all established towns
- /town info: View your town's name, leader, officers, residents, and claims.
- /town info [town]: View details of another town
- /town online: View your town's online players
- /town online [town]: View another town's online players
- /town color [r] [g] [b]: Set town territory color for dynmap. Town leader only.
- /town claim: Claim a contiguous territory for your town. Town leader and officers only.
- /town unclaim: Abandon your town's claim over a territory
- /town income: Collect income from territory bonuses. Town leader and officers only.
- /town prefix [prefix]: Set personal chat prefix
- /town prefix [player] [prefix]: Set a player's prefix (leader and officers only)
- /town suffix [suffix]: Set personal chat suffix
- /town suffix [player] [suffix]: Set a player's suffix (leader and officers only)
- /town rename [new name]: Rename your town. Town leader only.
- /town map: Prints territory map into chat for player
- /town minimap [3|4|5]: Turns on/off territory chunks minimap on sidebar. Optionally specify size value: 3, 4, or 5.
- /town permissions [type] [group] [allow/deny]: Set permissions for interacting in town territory. [type] can be: interact, build, destroy, chests, items [group] can be: nation, ally, outsider. Last entry is either "allow" or "deny"
- /town protect: Toggle protecting/unprotecting chests with mouse click.
- /town protect show: Shows protected chests with particles
- /town trust [name]: Mark player in town as trusted. Leader and officers only.
- /town untrust [name]: Mark player in town as untrusted. Leader and officers only.
- /town capital: Move town home territory to your current player location. (This also changes town spawn location.)
- /town annex: Annex an occupied territory and add it to your town
- /town outpost: Commands to manage town outposts.
- /town outpost list: Print list of town's outposts.
- /town outpost setspawn: Set an outpost's spawn point. Player must be in the outpost territory.

### /nation
For managing a player's nation, intended to only be used ingame by players.

- /nation create [name]: Create a new nation with your town as capital.
- /nation delete: Delete your nation. Leader of capital town only.
- /nation leave: Leave your nation. Used by town leaders only.
- /nation capital [town]: Set another town in your nation as its capital
- /nation invite [town]: Invite another town to join your nation. Leader of capital town only.
- /nation list: View list of all established nations and their towns
- /nation color [r] [g] [b]: Set territory color on dynmap for all towns in nation. Leader of capital town only.
- /nation rename [name]: Renames your nation. Leader of capital town only.
- /nation online: View your nation's online players
- /nation online [nation]: View another nation's online players
- /nation info [nation]: View nation's info
- /nation spawn [town]: Teleport to town inside your nation. May cost items to use.

### /ally
Offer/accept alliance with another town or nation.

- /ally [town]: Offer/accept alliance with a town.
- /ally [nation]: Offer/accept alliance with a nation.

### /unally
Break alliance with another town or nation. Towns will enter a truce period.

- /unally [town]: Break alliance with a town.
- /unally [nation]: Break alliance with a nation.

### /war
Declare war on other towns or nations.

- /war [town]: Declares war on a town.
- /war [nation]: Declares war on a nation.

### /peace
Opens peace treaty window with another town or nation.

- /peace [town]: Negotiate a peace treaty with a town.
- /peace [nation]: Negotiate a peace treaty with a nation.

### /truce
View your town's remaining truce times with other towns.

- /truce [town]: View other town's remaining truce times.

### /nodes
For printing general info about the world (e.g. resource nodes, territories, towns, nations, players). Can be used by players ingame or in console.

- /nodes help: Prints list of commands
- /nodes resource: Prints list of all resource nodes
- /nodes resource [name]: Print detailed stats of a resource node type (income, crops, animals, ore)
- /nodes territory: In console, just prints total territory count. Ingame, prints info about territory player is standing in.
- /nodes territory [id]: Prints info about territory from id
- /nodes town: Prints list of all towns, their player count and territory count
- /nodes town [name]: Prints detailed info about town from [name] (territories, players, etc...)
- /nodes nation: Prints list of all nations
- /nodes nation [name]: Prints detailed info about nation from [name] (towns, allies, enemies, etc...)
- /nodes player [name]: Prints player info (their town and nation)
- /nodes war: Print if war enabled/disabled