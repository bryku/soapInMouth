var blacklist = [
	'anal',
	'anilingus',
	'anus',
	'areola',
	'b1tch',
	'ballsack',
	'bitch',
	'blowjob',
	'boner',
	'boob',
	'breast',
	'bukkake',
	'cameltoe',
	'carpetmuncher',
	'chinc',
	'chink',
	'chode',
	'clit',
	'cock',
	'coital',
	'coon',
	'cum',
	'cunilingus',
	'cunnilingus',
	'cunt',
	'dick',
	'dike',
	'dildo',
	'dong',
	'douche',
	'dumbass',
	'dyke',
	'ejaculate',
	'erection',
	'fack',
	'fag',
	'felch',
	'fellate',
	'fellatio',
	'feltch',
	'foreskin',
	'fuck',
	'fuk',
	'gay',
	'goatse',
	'godamn',
	'goddammit',
	'goddamn',
	'goldenshower',
	'handjob',
	'hardon',
	'hitler',
	'homo',
	'horny',
	'jerkoff',
	'jism',
	'jiz',
	'kkk',
	'labia',
	'lesbo',
	'lezbo',
	'masterbat',
	'masturbat',
	'menstruat',
	'muff',
	'nazi',
	'negro',
	'nigga',
	'niger',
	'nigger',
	'nipple',
	'nympho',
	'oral',
	'orgasm',
	'orgies',
	'orgy',
	'pantie',
	'panty',
	'pedo',
	'penetrat',
	'penial',
	'penile',
	'penis',
	'phalli',
	'phuck',
	'piss',
	'pms',
	'poon',
	'porn',
	'prostitut',
	'pube',
	'pubic',
	'pubis',
	'puss',
	'pussies',
	'pussy',
	'puto',
	'queaf',
	'queef',
	'queer',
	'rape',
	'rapist',
	'rectal',
	'rectum',
	'rectus',
	'reich',
	'rimjob',
	'schlong',
	'scrote',
	'scrotum',
	'semen',
	'sex',
	'shit',
	'skank',
	'slut',
	'sodomize',
	'sperm',
	'spunk',
	'stfu',
	'tampon',
	'tard',
	'testes',
	'testicle',
	'testis',
	'tits',
	'tramp',
	'transsex',
	'turd',
	'twat',
	'undies',
	'urinal',
	'urine',
	'uterus',
	'vag',
	'vagina',
	'viagra',
	'virgin',
	'vulva',
	'wang',
	'wank',
	'weiner',
	'wetback',
	'whoralicious',
	'whore',
	'whoring',
	'wigger',
	'gaes',
	'gaez'
];
function splitStringMergeSubString(s,a,b){
	var arr = s.split('');
	var indexStart = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === a){indexStart = i}
		else if(arr[i] === b){
			for(var j = indexStart+1; j < i+1; j++){
				arr[indexStart] += arr[j];
				arr[j] = '';
			}
		}
	}
	return arr.filter((v)=>{if(v.length < 1){return false}return true})
}
function generateRegex(arr){
	return arr.map((v)=>{
		var str = v.replace(/o|0/gmi,'[o0]+')
		     .replace(/i|1|!/gmi,'[i1!]+')
		     .replace(/u|a/gmi,'[ua]+')
		     .replace(/e|3/gmi,'[e3]+')
		     .replace(/b|8/gmi,'[b8]+')
		     .replace(/s|5/gmi,'[s5]+');
		str = splitStringMergeSubString(str,'[','+').map((v)=>{return v+"\\s*"}).join('');
		return new RegExp('('+str+')+','gmi')
	});
}
blacklist = generateRegex(blacklist);
module.exports = function(str){
	blacklist.forEach((word)=>{
		var matches = str.match(word);
		if(matches){
			matches.forEach((m)=>{
				str = str.replace(word, function(a,b,c){
					return Array(a.length).fill('*').join('')
				});
			})
		}
	});
	return str
};
