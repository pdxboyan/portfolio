import WriteupLayout from "./components/writeupTemplate";

export default function CFlatWriteup() {
    return (
        <WriteupLayout
            title="Your guide to Cb"
            date="3/27/25"
            image="./articleAssets/CFlat/banner.jpg"
            imageAlt="Macro shot of a pine sapling and succulents."
        >
            
            <p className="font-text text-xl">
                Cb (C Flat) is a programming language that was used in CS 358 (Principles of Programming Languages) as my final project.
                The language is built in Python and includes its own grammar, parser, and interpreter. Cb is an expression based language
                capable of basic arithmetic, let bindings, if statements, and the ability to evaluate and play simple melodies using special
                operators. I'll provide a list of all of the operators and their precedence order below. The early versions of the language
                used midi for audio playback, however I quickly discovered the lack of native support for midi across the common operating systems.
                This led me back to my notes from the previous term, where in CS 416p (Sound & Music in Computing) we learned how to create a
                synthesizer from scratch in Python. Using these notes, I created the new pipeline for melody playback. Sin waves are generated
                based on the frequency converted from the note values the user inputted, to the specified duration. Once a wave is generated, an
                ADSR (attack, decay, sustain, release) envelope is applied to it to eliminate popping on playback. These waves are generated one by one
                and appended to the master wave, stored in a numpy linspace array, which is then played back to the user using the Sounddevice library.
            </p>

            <p className="font-text text-xl">
                Melodies are defined by using the melody keyword, with 1 or more NOTE|DURATION pairs. Valid notes are defined as A B C D E F G or R
                for rests. Durations can be specified directly with integers, or expressions which evaluate to integers.  
                An example of a simple melody could be: <code>melody(A1, B2, G1, C(2+1))</code>
                The synth is monophonic, unless the chorus operator is used, and there is only one playable octave accessible to the user. All notes are
                calculated based on concert A, or 440hz.
            </p>

            <p className="font-text text-xl">
                The grammar for the language is defined using the Lark library which includes the tools to build the grammatical structure, a parser, and
                a transformer which builds an abstract syntax tree (AST) to be sent to the interpreter. In my <code>parse_run.py</code> file I guide the
                transformer into returning the required fields of each operation before building the AST to be sent to the interpreter. The raw Lark file
                is pretty dense to read on its own, so I'll include a simplified version of the grammar below, where the precedence order is defined as
                lowest to highest.
            </p>

            <pre>
                <code>
                    {`
Simplified Lark Grammar
_____________________________________________________

1.
	e1 ; e2                       	- the sequencing operator evaluates both expressions, but throws out the result of e1, only printing e2.
	song_expr                     	- song expressions are defined below and are tied for lowest precedence
    
2.
	if e1 then e2 else e3         	- if statements are evaluated as expressions, and contain 3 sub expressions
	var := e1                     	- the assignment operator
	show e1                       	- the show operator prints the evaluation of e1, and plays if e1 is a song expression

3.
	e1 || e2                      	- logical OR

4.
	e1 && e2                      	- logical AND

5.
	!e1                           	- logical NOT

6.
	e1 == e2                      	- comparison operator
	e1 < e2                       	- less than operator

7.
	e1 + e2                       	- adds two expressions
	e1 - e2                       	- subtracts two expressions

8.
	e1 * e2                       	- multiples two expressions
	e1 / e2                       	- integer divides two expressions

9.
	-e1                           	- negation operator

10.
	read                          	- the read operator takes an integer input from the user and displays it back
	let var = e1 in e2 end        	- let bindings allow variables to be bound values in other expressions
	letfun var(var) = e1 in e2 end	- allows for simple function definitions like f(x) to be used in other expressions


	Song Expressions
	__________________

1.
	<= m1 =>    	- play operator, any melody wrapping in this will generate a sin wave and output it

2.
	** m1       	- chorus operator, will generate two additional melodies, one an octave lower, and one an octave higher,
                  	and play them simultaneously
       	 
3.
	m1 @ e1     	- repeat operator, will repeat a melody an integer amount of times, specified with either an integer or an expression

4.
	m1 ++ m2   	- append operator, will concatenate two melodies together
                    `}
                </code>
            </pre>

            <p className="font-text text-xl">
                Below I have included a short demo of the language, as well as a link to the github repo in case you are curious about any
                specific details or implementations! Cheers.
            </p>

            <div className="flex flex-col items-center">
                <a 
                    href="https://github.com/boga2-psu/musiGen" 
                    target="_blank"
                    className="mb-4 pl-32 pr-32 border-2 border-white rounded-xl
                            font-text text-2xl p-8
                            transition-all duration-300 ease-out
                            hover:bg-black hover:text-white hover:border-black
                            hover:-translate-y-1 hover:shadow-xl"
                >
                    Cb Repo
                </a>
                <iframe
                    src="https://www.youtube.com/embed/ltFjTA1lvTs?si=_ifCURhdJCJJchPU"
                    title="YouTube video player"
                    className="w-full aspect-video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

        </WriteupLayout>
    );
}