function CREFORM() {
  var Tableau=document.createElement('Table');
  Tableau.setAttribute('id', 'tableSalire'); //affecter un attribut
  
  var TR=document.createElement('TR'); //créer une balise TR
  var TDlbl=document.createElement('TD'); //créer une balise TD
  var TDtxt=document.createElement('TD'); //Créer une balise TD
  // Création du label
  var lbl=document.createElement('label'); //créer une balise label
  lbl.innerHTML=('Salaire brute'); // Affecte le texte du label
  //Création de la one de saisie
  var txt=document.createElement('input'); //Créer une balise input
  txt.type="text"; //équivalent de input type = text
  txt.setAttribute('id', 'txtSalaireBrute'); //affecter une attribut
  
  //intégration d'un label dans le TD
  TDlbl.appendChild(lbl); 
  //intégration du TD dans le TR
  TR.appendChild(TDlbl);
  //intégration du input dans le TD
  TDtxt.appendChild(txt);
  //intégration du TD dans le TR
  TR.appendChild(TDtxt);
  //intérgration du TR dans le tableau
  Tableau.appendChild(TR);
  //------
  var TR=document.createElement('TR');
  var TDlbl=document.createElement('TD');
  var TDtxt=document.createElement('TD');
  
  var lbl=document.createElement('label');
  lbl.innerHTML= ('Nombre enfants');
  
  var txt=document.createElement('input');
  txt.type="text";
  txt.setAttribute('id', 'txtNbreEnfant');
  
  TDlbl.appendChild(lbl);
  TR.appendChild(TDlbl);
  
  TDtxt.appendChild(txt);
  TR.appendChild(TDtxt);
  
  TD.appendChild(TR);
  //-------
  var TR=document.createElement('TR');
  var TDlbl=document.createElement('TD');
  var TDtxt=document.createElement('TD');
  
  var lbl=document.createElement('label');
  lbl.innerHTML=('Sexe');
  //Création de la liste déroulante
  var cmbsex=document.createElement('select');
  cmbsex.type="select";
  cmdsex.setAttribute('id', 'cmbsex');
  //Création d'une liste déroulante
  var ligne=document.createElement('option');
  ligne.value='-';
  ligne.text='Faites votre choix';
  //affectation de la ligne à la liste déroulante
  cmbsex.add(ligne);
  //------
  var ligne=document.createElement('option');
  ligne.value='F';
  ligne.texte='F';
  cmbsex.add(ligne);
  //------
  var ligne=document.createElement('option');
  ligne.value='M';
  ligne.texte='M';
  //------
  TDlbl.appendChild(lbl);
  TR.appendChild(TDlbl);
  //------
  TDtxt.appendChild(cmbsex);
  TR.appenChild(TDtxt);
  Tableau.appendChild(TR);
  //------
  var TR=document.createElement('TR');
  var TDlbtn=document.createElement('TD');
  //----Création du bouton
  var btn=document.createElement('Button');
  btn.innerHTML = ('Vider');
  btn.setAttribute('id','btnVider');
  btn.type='button';
  // Création de l'évènement click
  btn.onclick=ViderForm;
  //------
  TDlbtn.appendChild(btn);
  TR.appendChild(TDlbtn);
  Tableau.appendChild(TR);
  //------
  var TDlbtn=document.createElement('TD');
  var btn=document.createElement('Button');
  btn.innerHTML=('Calculer');
  btn.setAttribute('id','btnCalculer');
  // Création de l'évènement Click
  btn.onclick=calculSalaire;
  //------
  TDlbtn.appendChild(btn);
  TR.appendChild(TDlbtn);
  Tableau.appendChild(TR);
  //------
  var TDlbtn=document.createElement('label');
  var TDlbl=document.createElement('TD');
  var TDtxt=document.createElement('TD');
  
  var lbl=document.createElement('label');
  lbl.innerHTML=('Salaire Net');
  lbl.style.fontSize = '20px';
  lbl.style.color= 'red'
  //------
  var lblNet=document.createElement('label');
  lblNET.setAttribute('id', 'lblSalaireNet');
  lblNET.style.fontSize='20px';
  lblNET.style.color='red';
  lblNET.style.border='dashed';
  //------
  TDlbl.appendChild(lbl);
  
  TR.appendChild(TDlbl);
  
  TDtxt.appendChild(lblNET);
  TR.appendChild(TDtxt);
  //------
  document.body.appendChild(Tableau);
}
  
  
}