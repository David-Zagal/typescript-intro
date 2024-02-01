const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
	name: string;
	hp: number;
	skills: string[];
	hometown?: string;
}

const strider: Character = {
	name: 'Strider',
	hp: 100,
	skills: skills.splice (0, 2) //['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table (strider);

export {};