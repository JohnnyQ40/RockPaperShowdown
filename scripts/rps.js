function game(choice1, choice2){
    if(choice1==choice2){
        return 0;
    }else if((choice1+1) % 3 == choice2 % 3){
        return 1;
    }else{
        return 2;
    }
}