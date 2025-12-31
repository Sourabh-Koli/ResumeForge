function updateName ()
{
	const name = document.getElementById( "nameInput" ).value;
	document.getElementById( "name" ).innerText = name;
}
function downloadPDF ()
{
	const element = document.querySelector( '.resume' );
	html2pdf().from( element ).save( 'resume.pdf' );
}

function updateEmail ()
{
	const email = document.getElementById( "emailInput" ).value;
	document.getElementById( "email" ).innerHTML = `<i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;${ email }`;
}

function updateMobNo ()
{
	const mobNo = document.getElementById( "mobInput" ).value;
	document.getElementById( "mob" ).innerHTML = `<i class="fa-solid fa-phone"></i>&nbsp;&nbsp;${ mobNo }`;
}

function updateAddress ()
{
	const address = document.getElementById( "addressInput" ).value;
	document.getElementById( "address" ).innerHTML = `<i class="fa-solid fa-house"></i>&nbsp;&nbsp;${ address }`;
}

function updateImage ()
{
	const imageInput = document.getElementById( "imageInput" );
	const file = imageInput.files[ 0 ];

	if ( file )
	{
		const reader = new FileReader();
		reader.onload = function ( e )
		{
			document.getElementById( "profile" ).src = e.target.result;
		};
		reader.readAsDataURL( file );
	}
}

function updateProfessional ()
{
	const professional = document.getElementById( "professionalInput" ).value;
	document.getElementById( "summary" ).innerText = professional;

}

function updateRole ()
{
	const role = document.getElementById( "roleInput" ).value;
	document.getElementById( "role" ).innerText = role;

}

function updateLanguage ()
{
	const language = document.getElementById( "languageInput" ).value;
	document.getElementById( "language" ).innerText = language;

}
function updateExperience ()
{
	const experience = document.getElementById( "experienceInput" ).value;
	document.getElementById( "job" ).innerText = experience;
}
function updateEducation ()
{
	const education = document.getElementById( "educationInput" ).value;
	document.getElementById( "education" ).innerText = education;
}

function updateSkills ()
{
	const skills = document.getElementById( "skillsInput" ).value;
	document.getElementById( "skills" ).innerText = skills;
}
function updateCertification ()
{
	const certification = document.getElementById( "certificationInput" ).value;
	document.getElementById( "certification" ).innerText = certification;
}

function updateSign ( signInput, sign )
{
	const newSign = document.getElementById( signInput );
	const file = newSign.files[ 0 ];

	if ( file )
	{
		const reader = new FileReader();
		reader.onload = function ( e )
		{
			document.getElementById( sign ).src = e.target.result;
		};
		reader.readAsDataURL( file );
	}
}

function updateDate ()
{
	const date = document.getElementById( "dateInput" ).value;
	document.getElementById( "date" ).innerText = date;
}

document.querySelector( '.button' ).addEventListener( 'click', function ()
{
	updateName();
	updateEmail();
	updateMobNo();
	updateAddress();
	updateImage();
	updateProfessional();
	updateExperience();
	updateEducation();
	updateRole();
	updateSkills();
	updateCertification();
	updateDate();
	updateLanguage();
} );