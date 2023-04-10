import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";

const People = () => {

    const people = [
                        { id: 1,
                        type: "",
                        userName: "Kevin",
                        image: "",
                        bg: "bg-black" 
                        },

                        { id: 2,
                        type: "",
                        userName: "Louie",
                        image: "",
                        bg: "bg-purple-400"  },

                        { id: 3,
                        type: "",
                        userName: "Abraham",
                        image: "",
                        bg: "bg-green-400"  },

                        { id: 4,
                        type: "",
                        userName: "Sedina",
                        image: "",
                        bg: "bg-yellow-400"  },

                        { id: 5,
                        type: "",
                        userName: "Box",
                        image: "",
                        bg: "bg-pink-400"  },
                        
                        { id: 6,
                        type: "",
                        userName: "Ketchup",
                        image: "",
                        bg: "bg-blue-400"  },
                    
                    ]

  return <>
            <div className="space-y-4">
                <h1>People to follow</h1>
                <div className="space-y-4">
                        {people.map(person => <div key={person.id} className="flex items-center justify-between flex-wrap gap-2">
                                                    <div className="flex gap-4 items-center">
                                                    <div className={`h-[30px] w-[30px] rounded-full ${person.bg}`}>
                                                    </div>
                                                    <h1>{person.userName}</h1>                                                 
                                                    </div>
                                                    <Button text="" icon={faUserPlus} modifier="border border-gray-400"/>
                                              </div>
                        
                        ).slice(0,4)}
                </div>
            </div>
         </>
};

export default People;
