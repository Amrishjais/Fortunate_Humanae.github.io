let x=0;
let score1=0,score2=0;
function func(){
        if(x==25){
                    
            if(score1>score2){
                //Score in Local Storage
                localStorage.setItem("Player1's Score ", score1);
                localStorage.setItem("Player2's Score", score2);
                document.getElementById("first").innerHTML=" Congratulations!!!!!, 1st Player has own with the score of "+ score1;
                
            }
            else{
                //Score in Local Storage
                localStorage.setItem("Player1's Score ", score1);
                localStorage.setItem("Player2's Score", score2);
                document.getElementById("first").innerHTML=" Congratulations!!!!!, 2nd Player has own with the score of "+ score2;
                
            }
        
    }
    if(x==26){
        window.location.reload();
    }
        var resu=document.getElementById("text1").value;
        if(resu<=5 && resu >=1){
            if(x%2==0){
                player1(resu);
                x++;
            }
            else{
                player2(resu);
                x++;
            }
            console.log(resu);
        }
      
        else{
            alert("Your Entered number is not between 1 to 5")
        }
    }
  let i=1,j=1;
  function Shoot1(Bullets1){
    i=1;
    while(Bullets1!=0 && i<=5){
        if(fb2[i]==1){
            document.getElementById(i+".2").innerHTML=" ";
            CT++;
           fb2[i]=0;
           pt[i]=1;
           Bullets1--; 
           score1=score1+5;
        }
        i++;
    }
  }

  function Shoot2(Bullets2){
    j=1;
     while(Bullets2!=0&& j<=5){
        if(fb1[j]==1){
            document.getElementById(j+".1").innerHTML=" ";
            PT++;
           fb1[j]=0;
           ct[j]=1;
           Bullets2--;
           score2=score2+5;
          } 
          j++;
     }
   
  }
  var CT=0,PT=0;
let ct=[1,1,1,1,1,1];
let pt=[1,1,1,1,1,1];
let fb1=[0,0,0,0,0,0];
let fb2=[0,0,0,0,0,0];
let pl=0,cl=0;
let b1=0,b2=0,b3=0,b4=0,b5=0;
let B1=0,B2=0,B3=0,B4=0,B5=0;

function player1(resu){
    if(resu==1){
        if(ct[1]==1){
            var src = document.getElementById("1.1");
            src.appendChild(img1);
            ct[1]++;
        }
        else if(ct[1]==2){
            var src = document.getElementById("1.1");
           src.replaceChild(img1_1,img1);
            ct[1]++;
        }  
        else if(ct[1]==3){
            var src = document.getElementById("1.1");
            src.replaceChild(img2_1,img1_1);
            ct[1]++;
        }
        else if(ct[1]==4){
             var src=document.getElementById("1.1");
             src.replaceChild(img3_1,img2_1);
            fb1[1]=1;
            ct[1]++;
        }
        else if(ct[1]==5){
            var src=document.getElementById("1.1");
             src.replaceChild(img8_1,img3_1);
            ct[1]++;
        }
        else if(ct[1]>=6){
            b1++;
            Shoot1(b1);
            b1=b1-CT;
            CT=0;
            document.getElementById("1.1").innerHTML= b1+ " . ";
            ct[1]++;
            fb1[1]=0;
           
         
        }
    }
    if(resu==2){
        if(ct[2]==1){
            var src = document.getElementById("2.1");
            src.appendChild(img2);
            ct[2]++;
        }
        else if(ct[2]==2){
            var src = document.getElementById("2.1");
            src.replaceChild(img1_2,img2);
            ct[2]++;
        }
        else if(ct[2]==3){
            var src = document.getElementById("2.1");
            src.replaceChild(img2_2,img1_2);
            ct[2]++;
        }
        else if(ct[2]==4){
            var src = document.getElementById("2.1");
            src.replaceChild(img3_2,img2_2);
            fb1[2]++;
            ct[2]++;
        }
        else if(ct[2]==5){
            var src=document.getElementById("2.1");
            src.replaceChild(img8_2,img3_2);
            ct[2]++;
        }
        else if(ct[2]>=6){
            b2++;
            Shoot1(b2);
            b2=b2-CT;
            CT=0;
            document.getElementById("2.1").innerHTML= b2+ " . ";
            fb1[2]=0;
            ct[2]++;

            
        }
    }
    if(resu==3){
        if(ct[3]==1){
            var src = document.getElementById("3.1");
            src.appendChild(img3);
            ct[3]++;
        }
        else if(ct[3]==2){
            var src = document.getElementById("3.1");
            src.replaceChild(img1_3,img3);
            ct[3]++;
        }
        else if(ct[3]==3){
            var src = document.getElementById("3.1");
            src.replaceChild(img2_3,img1_3);
            ct[3]++;
        }
        else if(ct[3]==4){
            var src = document.getElementById("3.1");
            src.replaceChild(img3_3,img2_3);
            fb1[3]++;
            ct[3]++;
        }
        else if(ct[3]==5){
            var src=document.getElementById("3.1");
            src.replaceChild(img8_3,img3_3);
            ct[3]++;
        }
        else if(ct[3]>=6){
            b3++;
            Shoot1(b3);
            b3=b3-CT;
            CT=0;
            document.getElementById("3.1").innerHTML= b3+ " . ";
            ct[3]++;
            fb1[3]=0;
        }
    }
    if(resu==4){
        if(ct[4]==1){
            var src = document.getElementById("4.1");
            src.appendChild(img4);
            ct[4]++;
        }
        else if(ct[4]==2){
            var src = document.getElementById("4.1");
            src.replaceChild(img1_4,img4);
            ct[4]++;
        }
        else if(ct[4]==3){
            var src = document.getElementById("4.1");
            src.replaceChild(img2_4,img1_4);
            ct[4]++;
        }
        else if(ct[4]==4){
            var src = document.getElementById("4.1");
            src.replaceChild(img3_4,img2_4);
           fb1[4]++;
            ct[4]++;
        }
        else if(ct[4]==5){
            var src=document.getElementById("4.1");
            src.replaceChild(img8_4,img3_4);
            ct[4]++;
        }
        else if(ct[4]>=6){
            b4++;
            Shoot1(b4);
            b4=b4-CT;
            CT=0;
            document.getElementById("4.1").innerHTML= b4+ " . ";
            ct[4]++;
            fb1[4]=0;
        }
    }
    if(resu==5){
        if(ct[5]==1){
            var src = document.getElementById("5.1");
            src.appendChild(img5);
            ct[5]++;
        }
        else if(ct[5]==2){
            var src = document.getElementById("5.1");
            src.replaceChild(img1_5,img5);
            ct[5]++;
        }
        else if(ct[5]==3){
            var src = document.getElementById("5.1");
            src.replaceChild(img2_5,img1_5);
            ct[5]++;
        }
        else if(ct[5]==4){
            var src = document.getElementById("5.1");
            src.replaceChild(img3_5,img2_5);
            fb1[5]++;
            ct[5]++;
        }
        else if(ct[5]==5){
            var src=document.getElementById("5.1");
            src.replaceChild(img8_5,img3_5);
            ct[5]++;
        }
        else if(ct[5]>=6){
            b5++;
            Shoot1(b5);
            b5=b5-CT;
            CT=0;
            document.getElementById("5.1").innerHTML= b5+ " . ";
            ct[5]++;
            fb1[5]=0;
        }
    }
}

function player2(resu){
    if(resu==1){
        if(pt[1]==1){
            var src = document.getElementById("1.2");
            src.appendChild(img4_1);
            pt[1]++;
        }
        else if(pt[1]==2){
            var src = document.getElementById("1.2");
            src.replaceChild(img5_1,img4_1);
            pt[1]++;
        }
        else if(pt[1]==3){
            var src = document.getElementById("1.2");
            src.replaceChild(img6_1,img5_1);
            pt[1]++;
        }
        else if(pt[1]==4){
            var src = document.getElementById("1.2");
            src.replaceChild(img7_1,img6_1);
            fb2[1]=1;
            pt[1]++;
        }
        else if(pt[1]==5){
            var src=document.getElementById("1.2");
            src.replaceChild(img8_6,img7_1);
            pt[1]++;
        }
        else if(pt[1]>=6){
            B1++;
            Shoot2(B1);
            B1=B1-PT;
            PT=0;
            document.getElementById("1.2").innerHTML= B1+ " . ";
            fb2[1]=0;
            pt[1]++;
           
        }
    }
    if(resu==2){
        if(pt[2]==1){
            var src = document.getElementById("2.2");
            src.appendChild(img4_2);
            pt[2]++;
        }
        else if(pt[2]==2){
            var src = document.getElementById("2.2");
            src.replaceChild(img5_2,img4_2);
            pt[2]++;
        }
        else if(pt[2]==3){
            var src = document.getElementById("2.2");
            src.replaceChild(img6_2,img5_2);
            pt[2]++;
        }
        else if(pt[2]==4){
            var src = document.getElementById("2.2");
            src.replaceChild(img7_2,img6_2);
            fb2[2]=1;
            pt[2]++;
        }
        else if(pt[2]==5){
            var src=document.getElementById("2.2");
            src.replaceChild(img8_7,img7_2);
            pt[2]++;
        }
        else if(pt[2]>=6){
            B2++;
            Shoot2(B2);
            B2=B2-PT;
            PT=0;
            document.getElementById("2.2").innerHTML= B2+ " . ";
            fb2[2]=0;
            pt[2]++;
          }
        }
    if(resu==3){
        if(pt[3]==1){
            var src = document.getElementById("3.2");
            src.appendChild(img4_3);
            pt[3]++;
        }
        else if(pt[3]==2){
            src.replaceChild(img5_3,img4_3);
            pt[3]++;
        }
        else if(pt[3]==3){
            var src = document.getElementById("3.2");
            src.replaceChild(img6_3,img5_3);
            pt[3]++;
        }
        else if(pt[3]==4){
            var src = document.getElementById("3.2");
            src.replaceChild(img7_3,img6_3);
           fb2[3]++;
            pt[3]++;
        }
        else if(pt[3]==5){
            var src=document.getElementById("3.2");
            src.replaceChild(img8_8,img7_3);
            pt[3]++;
        }
        else if(pt[3]>=6){
            B3++;
            Shoot2(B1);
            B3=B3-PT;
            PT=0;
            document.getElementById("3.2").innerHTML= B3+ " . ";
            fb2[3]=0;
            pt[3]++;
        }
    }
    if(resu==4){
        if(pt[4]==1){
            var src = document.getElementById("4.2");
            src.appendChild(img4_4);
           pt[4]++;
        }
        else if(pt[4]==2){
            var src = document.getElementById("4.2");
            src.replaceChild(img5_4,img4_4);
            pt[4]++;
        }
        else if(pt[4]==3){
            var src = document.getElementById("4.2");
            src.replaceChild(img6_4,img5_4);
            pt[4]++;
        }
        else if(pt[4]==4){
            var src = document.getElementById("4.2");
            src.replaceChild(img7_4,img6_4);
            fb2[4]++;
            pt[4]++;
        }
        else if(pt[4]==5){
            var src=document.getElementById("4.2");
            src.replaceChild(img8_9,img7_4);
            pt[4]++;
        }
        else if(pt[4]>=6){
            B4++;
            Shoot2(B4);
            B4=B4-PT;
            PT=0;
            document.getElementById("4.2").innerHTML= B4+ " . ";
            fb2[4]=0;
            pt[4]++;
        }
    }
    if(resu==5){
        var src=document.getElementById("5.2");
        if(pt[5]==1){
            src.appendChild(img4_5);
            pt[5]++;
        }
        else if(pt[5]==2){
            var src=document.getElementById("5.2");
            src.replaceChild(img5_5,img4_5);
            pt[5]++;
        }
        else if(pt[5]==3){
            var src=document.getElementById("5.2");
            src.replaceChild(img6_5,img5_5);
            pt[5]++;
        }
        else if(pt[5]==4){
            var src=document.getElementById("5.2");
            src.replaceChild(img7_5,img6_5);
            fb2[5]++;
            pt[5]++;
        }
        else if(pt[5]==5){
            var src=document.getElementById("5.2");
            src.replaceChild(img8_0,img7_5);
            pt[5]++;
        }
        else if(pt[5]>=6){
            B5++;
            Shoot2(B5);
            B5=B5-PT;
            PT=0;
            document.getElementById("5.2").innerHTML= B5+ " . ";
            fb2[5]=0;
            pt[5]++;
        }
    }
}
//Head Parts of First Playe
var img1 = document.createElement("img");
img1.src= "Head.png"
var img2 = document.createElement("img");
img2.src= "Head.png"
var img3 = document.createElement("img");
img3.src= "Head.png"
var img4 = document.createElement("img");
img4.src= "Head.png"
var img5= document.createElement("img");
img5.src= "Head.png"

//Now the Body Parts
var img1_1 = document.createElement("img");
img1_1.src= "Body.png"
var img1_2 = document.createElement("img");
img1_2.src= "Body.png"
var img1_3 = document.createElement("img");
img1_3.src= "Body.png"
var img1_4 = document.createElement("img");
img1_4.src= "Body.png"
var img1_5 = document.createElement("img");
img1_5.src= "Body.png"

//Now the Arms part
var img2_1=document.createElement("img");
img2_1.src="Arms.png";
var img2_2=document.createElement("img");
img2_2.src="Arms.png";
var img2_3=document.createElement("img");
img2_3.src="Arms.png";
var img2_4=document.createElement("img");
img2_4.src="Arms.png";
var img2_5=document.createElement("img");
img2_5.src="Arms.png";

//Now the Legs Parts
var img3_1=document.createElement("img");
img3_1.src="Legs.png";
var img3_2=document.createElement("img");
img3_2.src="Legs.png";
var img3_3=document.createElement("img");
img3_3.src="Legs.png";
var img3_4=document.createElement("img");
img3_4.src="Legs.png";
var img3_5=document.createElement("img");
img3_5.src="Legs.png";

//Head Parts of Second Player
var img4_1 = document.createElement("img");
img4_1.src= "Head.png"
var img4_2 = document.createElement("img");
img4_2.src= "Head.png"
var img4_3 = document.createElement("img");
img4_3.src= "Head.png"
var img4_4 = document.createElement("img");
img4_4.src= "Head.png"
var img4_5= document.createElement("img");
img4_5.src= "Head.png"

//Now the Body Parts
var img5_1 = document.createElement("img");
img5_1.src= "Body.png"
var img5_2 = document.createElement("img");
img5_2.src= "Body.png"
var img5_3 = document.createElement("img");
img5_3.src= "Body.png"
var img5_4 = document.createElement("img");
img5_4.src= "Body.png"
var img5_5 = document.createElement("img");
img5_5.src= "Body.png"

//Now the Arms part
var img6_1=document.createElement("img");
img6_1.src="Arms.png";
var img6_2=document.createElement("img");
img6_2.src="Arms.png";
var img6_3=document.createElement("img");
img6_3.src="Arms.png";
var img6_4=document.createElement("img");
img6_4.src="Arms.png";
var img6_5=document.createElement("img");
img6_5.src="Arms.png";

//Now the Legs Parts
var img7_1=document.createElement("img");
img7_1.src="Legs.png";
var img7_2=document.createElement("img");
img7_2.src="Legs.png";
var img7_3=document.createElement("img");
img7_3.src="Legs.png";
var img7_4=document.createElement("img");
img7_4.src="Legs.png";
var img7_5=document.createElement("img");
img7_5.src="Legs.png";

//Now guns of the First Player
var img8_1=document.createElement("img");
img8_1.src="Gun.jpg";
var img8_2=document.createElement("img");
img8_2.src="Gun.jpg";
var img8_3=document.createElement("img");
img8_3.src="Gun.jpg";
var img8_4=document.createElement("img");
img8_4.src="Gun.jpg";
var img8_5=document.createElement("img");
img8_5.src="Gun.jpg";

//Now guns of the Second Player
var img8_6=document.createElement("img");
img8_6.src="Gun.jpg";
var img8_7=document.createElement("img");
img8_7.src="Gun.jpg";
var img8_8=document.createElement("img");
img8_8.src="Gun.jpg";
var img8_9=document.createElement("img");
img8_9.src="Gun.jpg";
var img8_0=document.createElement("img");
img8_0.src="Gun.jpg";