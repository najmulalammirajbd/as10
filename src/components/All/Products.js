import React from 'react';
import '../All/Products.css'
import img1 from '../../images/childSupport.png'
import img2 from '../../images/refuseShelter.png'
import img3 from '../../images/foodCharity.png'
import img4 from '../../images/clothSwap.png'
import img5 from '../../images/riverClean.png'
import img6 from '../../images/cleanWater.png'
import img7 from '../../images/goodEducation.png'
import img8 from '../../images/newBooks.png'
import img9 from '../../images/studyGroup.png'
import img10 from '../../images/birdHouse.png'
import img11 from '../../images/libraryBooks.png'
import img12 from '../../images/driveSafety.png'
import img13 from '../../images/musicLessons.png'
import img14 from '../../images/voteRegister.png'
import img15 from '../../images/clearnPark.png'
import img16 from '../../images/ITHelp.png'
import img17 from '../../images/animalShelter.png'
import img18 from '../../images/babySit.png'
import img19 from '../../images/stuffedAnimals.png'
import img20 from '../../images/schoolSuffiles.png'
import { useHistory } from 'react-router-dom';

const Products = () => {
        const history = useHistory() 
        const Registration = () => {
            history.push("/regi");
        }
    return (
        

        <div>
            <div className="products1">
            <div >
            <img src={img1} alt=""/>
            <br/>
            <button onClick={Registration}>Child Support</button>
            </div>
            <div>
            <img src={img2} alt=""/>
            <br/>
            <button onClick={Registration}>Refuge shelter</button>
            </div>
            <div>
            <img src={img3} alt=""/>
            <br/>
            <button onClick={Registration}>Food Charity</button>
            </div>
            <div>
            <img src={img4} alt=""/>
            <br/>
            <button onClick={Registration}>Host a clothing swap.</button>
            </div>
        </div>
        <div className="products1">
            <div >
            <img src={img5} alt=""/>
            <br/>
            <button onClick={Registration}>Host a river clean-up.</button>
            </div>
            <div>
            <img src={img6} alt=""/>
            <br/>
            <button onClick={Registration}>Clean water for children</button>
            </div>
            <div>
            <img src={img7} alt=""/>
            <br/>
            <button onClick={Registration}>Good education</button>
            </div>
            <div>
            <img src={img8} alt=""/>
            <br/>
            <button onClick={Registration}>New books for children</button>
            </div>
        </div>
        <div className="products1">
            <div >
            <img src={img9} alt=""/>
            <br/>
            <button onClick={Registration}>Host a study group.</button>
            </div>
            <div>
            <img src={img10} alt=""/>
            <br/>
            <button onClick={Registration}>Build birdhouses for <br/>
                    your neighbors.</button>
            </div>
            <div>
            <img src={img11} alt=""/>
            <br/>
            <button onClick={Registration}>Organize books at <br/>
                    the library.</button>
            </div>
            <div>
            <img src={img12} alt=""/>
            <br/>
            <button onClick={Registration}>Give a seminar on <br/>
                    driving safety.</button>
            </div>
        </div>
        <div className="products1">
            <div >
            <img src={img13} alt=""/>
            <br/>
            <button onClick={Registration}>Give free music <br/>
                    lessons.</button>
            </div>
            <div>
            <img src={img14} alt=""/>
            <br/>
            <button onClick={Registration}>Teach people how <br/>
                    to register to vote.</button>
            </div>
            <div>
            <img src={img15} alt=""/>
            <br/>
            <button onClick={Registration}>Clean up your <br/>
                    local park.</button>
            </div>
            <div>
            <img src={img16} alt=""/>
            <br/>
            <button onClick={Registration}>Give IT help to <br/>
                    local adults</button>
            </div>
        </div>
        <div className="products1">
            <div >
            <img src={img17} alt=""/>
            <br/>
            <button onClick={Registration}>Foster a shelter <br/>
                    animal.</button>
            </div>
            <div>
            <img src={img18} alt=""/>
            <br/>
            <button onClick={Registration}>Babysit during PTA <br/>
                    meetings.</button>
            </div>
            <div>
            <img src={img19} alt=""/>
            <br/>
            <button onClick={Registration}>Collect stuffed <br/>
                    animals.</button>
            </div>
            <div>
            <img src={img20} alt=""/>
            <br/>
            <button onClick={Registration}>Collect school <br/>
                    supplies.</button>
            </div>
        </div>
        </div>
    );
};

export default Products;