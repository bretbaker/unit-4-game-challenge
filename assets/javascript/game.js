// declare global objects/variables
        // -----------------------------------------------------
        
        let player = [
            {
                name: "Obi-Wan Kenobi",
                hp: 120,
                attack: 15,
                defender: false,
                alive: true,
            },
            {
                name: "Luke Skywalker",
                hp: 100,
                attack: 5,
                defender: false,
                alive: true,
            },
            {
                name: "Darth Sidious",
                hp: 130,
                attack: 20,
                defender: false,
                alive: true,
            },
            {
                name: "Darth Maul",
                hp: 110,
                attack: 10,
                defender: false,
                alive: true,
            }
        ];

        let playerAttack;  
        let playerHP;  
        let defenderAttack0 = player[0].attack;
        let defenderHP0 = player[0].hp;
        let defenderAttack1 = player[1].attack;
        let defenderHP1 = player[1].hp;
        let defenderAttack2 = player[2].attack;
        let defenderHP2 = player[2].hp;
        let defenderAttack3 = player[3].attack;
        let defenderHP3 = player[3].hp;
        let playerHPhtml;

        // declare global functions
        // ---------------------------------------------------------

        // first function run when page initially loads
        let start = () => {
            $('#sc-2').hide();
            $('#sc-3').hide();
            $('#sc-4').hide();
            $('#sc-5').hide();
            $('#gr-2').hide();
            $('#gr-3').hide();
            $('#gr-4').hide();
            $('#gr-5').hide();
            $('#restart-button').hide();
            $('#ob-4').hide();
            $('#ls-4').hide();
            $('#ds-4').hide();
            $('#dm-4').hide();
        }

        // text clear function
        let textClear = () => {
            $('#message-1').html('');
            $('#message-2').html('');
            $('#message-3').html('');
            $('#message-4').html('');
            $('#message-5').html('');
            $('#message-6').html('');
            $('#message-7').html('');
            $('#message-8').html('');
        }

        // function run if Obi-Wan is selected as player
        let obiPlayer = () => {
            $('#sc-1').hide();
            $('#gr-1').hide();
            $('#sc-2').show();
            $('#gr-2').show();
            $('#ls-2').hide();
            $('#ds-2').hide();
            $('#dm-2').hide();
            $('#sc-3').show();
            $('#gr-3').show();
            $('#ob-3').hide();
            defenderAttack0 = null;
            defenderHP0 = null;
            playerHPhtml = '#ob-player-hp';
            playerAttack = player[0].attack;
            playerHP = player[0].hp;
            textClear();
            $('#message-1').html('You select to play as Obi-Wan Kenobi!');
            $('#message-2').html('Good luck!');
        }

        // function run if Luke is selected as player
        let lukePlayer = () => {
            $('#sc-1').hide();
            $('#gr-1').hide();
            $('#sc-2').show();
            $('#gr-2').show();
            $('#ob-2').hide();
            $('#ds-2').hide();
            $('#dm-2').hide();
            $('#sc-3').show();
            $('#gr-3').show();
            $('#ls-3').hide();
            defenderAttack1 = null;
            defenderHP1 = null;
            playerHPhtml = '#ls-player-hp';
            playerAttack = player[1].attack;
            playerHP = player[1].hp;
            textClear();
            $('#message-1').html('You select to play as Luke Skywalker!');
            $('#message-2').html('Good luck!');
        }

        // function run if Sidious is selected as player
        let sidiousPlayer = () => {
            $('#sc-1').hide();
            $('#gr-1').hide();
            $('#sc-2').show();
            $('#gr-2').show();
            $('#ls-2').hide();
            $('#ob-2').hide();
            $('#dm-2').hide();
            $('#sc-3').show();
            $('#gr-3').show();
            $('#ds-3').hide();
            defenderAttack2 = null;
            defenderHP2 = null;
            playerHPhtml = '#ds-player-hp';
            playerAttack = player[2].attack;
            playerHP = player[2].hp;
            textClear();
            $('#message-1').html('You select to play as Darth Sidious!');
            $('#message-2').html('Good luck!');
        }

        // function run if Maul is selected as player
        let maulPlayer = () => {
            $('#sc-1').hide();
            $('#gr-1').hide();
            $('#sc-2').show();
            $('#gr-2').show();
            $('#ls-2').hide();
            $('#ds-2').hide();
            $('#ob-2').hide();
            $('#sc-3').show();
            $('#gr-3').show();
            $('#dm-3').hide();
            defenderAttack3 = null;
            defenderHP3 = null;
            playerHPhtml = '#dm-player-hp';
            playerAttack = player[3].attack;
            playerHP = player[3].hp;
            textClear();
            $('#message-1').html('You select to play as Darth Maul!');
            $('#message-2').html('Good luck!');
        }

        // function run if Obi-Wan is selected as defender
        let obiDefender = () => {
            $('#ob-3').hide();
            $('#sc-4').show();
            $('#gr-4').show();
            $('#sc-5').show();
            $('#gr-5').show();
            $('#ob-4').show();
            player[0].defender = true;
            textClear();
            $('#message-1').html('You select to fight Obi-Wan Kenobi!');
            $('#message-2').html('Click button to attack!');
        }

        // function run if Luke is selected as defender
        let lukeDefender = () => {
            $('#ls-3').hide();
            $('#sc-4').show();
            $('#gr-4').show();
            $('#sc-5').show();
            $('#gr-5').show();
            $('#ls-4').show();
            player[1].defender = true;
            textClear();
            $('#message-1').html('You select to fight Luke Skywalker!');
            $('#message-2').html('Click button to attack!');
        }

        // function run if Darth Sidious is selected as defender
        let sidiousDefender = () => {
            $('#ds-3').hide();
            $('#sc-4').show();
            $('#gr-4').show();
            $('#sc-5').show();
            $('#gr-5').show();
            $('#ds-4').show();
            player[2].defender = true;
            textClear();
            $('#message-1').html('You select to fight Darth Sidious!');
            $('#message-2').html('Click button to attack!');
        }

        // function run if Darth Maul is selected as defender
        let maulDefender = () => {
            $('#dm-3').hide();
            $('#sc-4').show();
            $('#gr-4').show();
            $('#sc-5').show();
            $('#gr-5').show();
            $('#dm-4').show();
            player[3].defender = true;
            textClear();
            $('#message-1').html('You select to fight Darth Maul!');
            $('#message-2').html('Click button to attack!');
        }

        // function run if Obi-Wan dies
        let obiDied = () => {
            player[0].defender = false;
            player[0].alive = false;
            $('#ob-4').hide();
            $('#message-2').html('You defeated Obi-Wan Kenobi!');
            playerHP = playerHP + defenderAttack0;
            $(playerHPhtml).html(playerHP);
        }
        
        // function run if Luke dies
        let lukeDied = () => {
            player[1].defender = false;
            player[1].alive = false;
            $('#ls-4').hide();
            $('#message-4').html('You defeated Luke Skywalker!');
            playerHP = playerHP + defenderAttack1;
            $(playerHPhtml).html(playerHP);
        }

        // function run if Darth Sidious dies
        let sidiousDied = () => {
            player[2].defender = false;
            player[2].alive = false;
            $('#ds-4').hide();
            $('#message-6').html('You defeated Darth Sidious!');
            playerHP = playerHP + defenderAttack2;
            $(playerHPhtml).html(playerHP);           
        }

        // function run if Darth Sidious dies
        let maulDied = () => {
            player[3].defender = false;
            player[3].alive = false;
            $('#dm-4').hide();
            $('#message-8').html('You defeated Darth Maul!');
            playerHP = playerHP + defenderAttack3;
            $(playerHPhtml).html(playerHP);
        }

        // function run if player is defeated
        let playerDefeat = () => {
            $('#sc-2').hide();
            $('#gr-2').hide();
            $('#sc-3').hide();
            $('#gr-3').hide();
            $('#sc-4').hide();
            $('#gr-4').hide();
            $('#restart-button').show();
            textClear();
            $('#message-1').html('You have been defeated!');
            $('#message-2').html('Click restart to try again!');
        }

        // function run if player wins
        let winGame = () => {
            $('#sc-3').hide();
            $('#gr-3').hide();
            $('#sc-4').hide();
            $('#gr-4').hide();
            $('#sc-5').hide();
            $('#gr-5').hide();
            $('#restart-button').show();
            textClear();
            $('#message-1').html('You win! You are a master of the Force!');
            $('#message-2').html('Click restart to play again!');
        }

        // -------------------------------------------------------------
        // -------------------------------------------------------------
        // start jquery function
        // -------------------------------------------------------------
        // -------------------------------------------------------------
        
        $(document).ready(function() {
            
            start();
                    
            // Stage 1: player select
            $('#ob-1').on('click', function() {
            obiPlayer();
            });
            $('#ls-1').on('click', function() {
            lukePlayer();
            });
            $('#ds-1').on('click', function() {
            sidiousPlayer();
            });
            $('#dm-1').on('click', function() {
            maulPlayer();
            });

            // Stage 2: defender(s) select
            $('#ob-3').on('click', function() {
                obiDefender();                              
            });
            $('#ls-3').on('click', function() {
                lukeDefender();                              
            });    
            $('#ds-3').on('click', function() {
                sidiousDefender();
            });    
            $('#dm-3').on('click', function() {
                maulDefender();
            });    

            // Stage 3: defender(s) fought according to whichever player/defender(s) selected
            $('#attack-button').on('click', function() {
                textClear();
                // Obi-Wan attacked
                if (player[0].defender && defenderHP0 > 0) {
                        defenderHP0 = defenderHP0 - playerAttack;
                        $('#ob-defender-hp').html(defenderHP0);
                        $('#message-1').html('You attacked Obi-Wan Kenobi for ' + playerAttack + ' damage!');
                        playerHP = playerHP - defenderAttack0;
                        $(playerHPhtml).html(playerHP);
                        $('#message-2').html('Obi-Wan Kenobi attacked you back for ' + defenderAttack0 + ' damage!');
                        playerAttack += 10;
                    if (defenderHP0 <= 0) {
                        obiDied();
                    }
                    if (playerHP <= 0) {
                        playerDefeat();
                    }
                    // Win condition
                    if (player[0].alive === false && player[1].alive === false && player[2].alive === false || player[0].alive === false && player[1].alive === false && player[3].alive === false || player[0].alive === false && player[2].alive === false && player[3].alive === false || player[1].alive === false && player[2].alive === false && player[3].alive === false) {
                        winGame();
                    }
                }
                // Luke attacked
                if (player[1].defender && defenderHP1 > 0) {
                        defenderHP1 = defenderHP1 - playerAttack;
                        $('#ls-defender-hp').html(defenderHP1);
                        $('#message-3').html('You attacked Luke Skywalker for ' + playerAttack + ' damage!');
                        playerHP = playerHP - defenderAttack1;
                        $(playerHPhtml).html(playerHP);
                        $('#message-4').html('Luke Skywalker attacked you back for ' + defenderAttack1 + ' damage!');
                        playerAttack += 10;
                    if (defenderHP1 <= 0) {
                        lukeDied();
                    }
                    if (playerHP <= 0) {
                        playerDefeat();
                    }
                    // Win condition
                    if (player[0].alive === false && player[1].alive === false && player[2].alive === false || player[0].alive === false && player[1].alive === false && player[3].alive === false || player[0].alive === false && player[2].alive === false && player[3].alive === false || player[1].alive === false && player[2].alive === false && player[3].alive === false) {
                        winGame();
                    }
                } 
                // Darth Sidious attacked
                if (player[2].defender && defenderHP2 > 0) {
                        defenderHP2 = defenderHP2 - playerAttack;
                        $('#ds-defender-hp').html(defenderHP2);
                        $('#message-5').html('You attacked Darth Sidious for ' + playerAttack + ' damage!');
                        playerHP = playerHP - defenderAttack2;
                        $(playerHPhtml).html(playerHP);
                        $('#message-6').html('Darth Sidious attacked you back for ' + defenderAttack2 + ' damage!');
                        playerAttack += 10;
                    if (defenderHP2 <= 0) {
                        sidiousDied();
                    }
                    if (playerHP <= 0) {
                        playerDefeat();
                    }
                    // Win condition
                    if (player[0].alive === false && player[1].alive === false && player[2].alive === false || player[0].alive === false && player[1].alive === false && player[3].alive === false || player[0].alive === false && player[2].alive === false && player[3].alive === false || player[1].alive === false && player[2].alive === false && player[3].alive === false) {
                        winGame();
                    }
                } 
                // Darth Maul attacked
                if (player[3].defender && defenderHP3 > 0) {
                        defenderHP3 = defenderHP3 - playerAttack;
                        $('#dm-defender-hp').html(defenderHP3);
                        $('#message-7').html('You attacked Darth Maul for ' + playerAttack + ' damage!');
                        playerHP = playerHP - defenderAttack3;
                        $(playerHPhtml).html(playerHP);
                        $('#message-8').html('Darth Maul attacked you back for ' + defenderAttack3 + ' damage!');
                        playerAttack += 10;
                    if (defenderHP3 <= 0) {
                        maulDied();
                    }
                    if (playerHP <= 0) {
                        playerDefeat();
                    }
                    // Win condition
                    if (player[0].alive === false && player[1].alive === false && player[2].alive === false || player[0].alive === false && player[1].alive === false && player[3].alive === false || player[0].alive === false && player[2].alive === false && player[3].alive === false || player[1].alive === false && player[2].alive === false && player[3].alive === false) {
                        winGame();
                    }
                }
            });        
            
            // Stage 4: game over
            $('#restart-button').on('click', function() {
                window.location.reload(true);
            });

        });