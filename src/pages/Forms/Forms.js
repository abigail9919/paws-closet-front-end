import './Forms.css';
import SearchBar from '../components/SearchBar/SearchBar';
import Nav from '../components/Nav/Nav';
import AsideNav from '../components/AsideNav/AsideNav';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Forms() {
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = (event) => {

        event.preventDefault();
        if (!selectedOption) {
          alert('Please select one option.');
        } else {
            axios.post("http://localhost:8000/api/v1/clients/newclients", {
                clientID: selectedClient,
                timeSlotID: selectedTimeSlot,
                })
                .then((response) => {
                alert('New Client added successfully!');
                console.log(response);
                window.location.reload();
                })
                .catch((error) => {
                alert("There was an issues creating new client");
                console.log(error.response.data.message);
                setErrorMessage(error.response.data.message);
            });
        }

    };


    return (
        <div className='forms-home'>
            {<SearchBar />}
            {<Nav />}
            <article className='forms-article'>
            {<AsideNav />}

                <form id="paws-form" onSubmit={handleSubmit}>
                    <header><h1>Paws' Pantry Intake Form</h1></header>
                    <p>Fields marked with an asterisk (*) are required.</p>

                    {/* CURRENT ROLE */}
                    <label><b>Are you a current:*</b></label><br />
                    <input
                        type="radio"
                        id="student"
                        name="school-role"
                        value="student"
                        data-validate="true"
                        required
                        onChange={() => setSelectedOption('student')}
                    />
                    <label htmlFor="student">Student</label><br />

                    <input
                        type="radio"
                        id="university-staff"
                        name="school-role"
                        value="university-staff"
                        data-validate="true"
                        onChange={() => setSelectedOption('university-staff')}
                    />
                    <label htmlFor="university-staff">University Staff or Affiliate Employee</label><br />

                    <input
                        type="radio"
                        id="faculty"
                        name="school-role"
                        value="faculty"
                        data-validate="true"
                        onChange={() => setSelectedOption('faculty')}
                    />
                    <label htmlFor="faculty">Faculty</label><br /><br />
                    <label for="faculty">Faculty</label><br /><br />


                    {/* NAME */}
                    <label><b>Name *</b></label><br />
                    <input type="text" id="first-name" name="name" placeholder="First" size="5" required minlength="1" maxlength="60" pattern="^[A-Za-z]+\s[A-Za-z]+$"></input>
                    <input type="text" id="last-name" name="name" placeholder="Last" size="10" required minlength="1" maxlength="60" pattern="^[A-Za-z]+\s[A-Za-z]+$"></input>
                    <br /><br />

                    {/* UNIVERSITY ID NUMBER */}
                    <label><b>University ID Number *</b></label><br />
                    <input type="text" class="long" id="uni-id" name="uni-id" required minlength="1" maxlength="60"></input>
                    <br /> <br />

                    {/* IUPUI EMAIL */}
                    <label><b>IUPUI Email Address *</b></label><br />
                    <input type="text" class="long" id="uni-email" name="uni-email" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    {/* ADDRESS */}
                    <label><b>Address *</b></label><br />
                    <label class="little-label">Street Address</label><br />
                    <input type="text" class="long" id="street-address" name="address" required minlength="1" maxlength="60"></input>
                    <br />
                    
                    <label class="little-label">Address line 2</label><br />
                    <input type="text" class="long" id="street-address-2" name="address" minlength="1" maxlength="60"></input>
                    <br />

                    <label class="little-label">City</label>
                    <label class="little-label label-positioning">State/Province/Region</label>
                    <br />
                    <input type="text" class="medium" id="city" name="address" required minlength="1" maxlength="60"></input>
                    <input type="text" class="medium" id="state" name="address" required minlength="1" maxlength="60"></input>
                    <br />

                    <label class="little-label">Postal/Zip Code</label>
                    <label class="little-label different-label-positioning">Country</label>
                    <br />
                    <input type="text" class="medium" id="postal" name="address" required minlength="1" maxlength="60"></input>
                    <input type="text" class="medium" id="country" name="address" required minlength="1" maxlength="60"></input>
                    <br />

                    <h1>How many people are in your household?</h1>
                    <label><b>Number of Adults *</b></label><br />
                    <input type="text" class="long" id="num-adults" name="num-adults" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    <label><b>Number of Children, 0-5 years old *</b></label><br />
                    <input type="text" class="long" id="num-children" name="num-children" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    <label><b>Number of Children, 6-18 years old *</b></label><br />
                    <input type="text" class="long" id="num-older-children" name="num-older-children" required minlength="1" maxlength="60"></input>
                    <br /><br />

                    <div class="dots"></div>

                    <label><b>What is your employment status? *</b></label><br />
                    <input type="radio" id="employment" name="employment" value="employ"></input>
                    <label for="employ">Full time</label><br />
                    <input type="radio" id="employment" name="employment" value="employ"></input>
                    <label for="employ">Part time</label><br />
                    <input type="radio" id="employment" name="employment" value="employ"></input>
                    <label for="employ">Unemployed</label><br />
                    <input type="radio" id="employment" name="employment" value="employ"></input>
                    <label for="employ">Disabled</label><br />
                    <br /><br />

                    <div class="dots"></div>

                    <label><b>Current source of income/resources: click all that apply. This information will not affect your eligibility to use the pantry. *</b></label>
                    <input type="checkbox" id="income-source" name="income-source"></input>

                    <button type="submit">Save</button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
            </article>
        </div>
    );
};

export default Forms;