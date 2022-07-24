import React from 'react';
import oneOnOne from '../../Utilities/Image/one-on-one.gif'
import team from '../../Utilities/Image/team.gif'
import group from '../../Utilities/Image/group.gif'
import assistant from '../../Utilities/Image/assistant-meeting.jpg'
import scheduling from '../../Utilities/Image/scheduling.jpg'
import GroupMeeting from '../../Utilities/Image/team-meet.jpg'

const Types = () => {
    return (
        <div className='container mx-auto mb-20'>
            <div>
                <div>
                    <div className="hero h-screen bg-base-100">
                      <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
                        <img src={oneOnOne} className="w-[650px] rounded-lg" alt='' />
                        <div>
                          <h1 className="text-5xl font-bold">Meeting with</h1>
                                <h1 className="text-5xl font-bold">One on one</h1>
                                <p className='text-xl text-justify'>MyScheduler makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div>
                        <img src={assistant} alt="" />
                    </div>
                    <div>
                        <h6 className='text-2xl font-bold'>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
                        <h3 className='text-5xl font-bold my-3'>Work like you have a personal assistant</h3>
                        <p className='text-xl text-justify'>Because MyScheduler automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="hero h-screen bg-base-100">
                      <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
                        <img src={team} className="w-[650px] rounded-lg" alt='' />
                        <div>
                          <h1 className="text-5xl font-bold">Meeting with</h1>
                          <h1 className="text-5xl font-bold">Your team</h1>
                          <p className='text-xl text-justify'>Whether your team’s performance is measured by sales revenue, recruiting pipeline, or customer retention, scheduling automation enables your team to hit goals faster.</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div>
                        <img src={scheduling} alt="" />
                    </div>
                    <div>
                        <h6 className='text-2xl font-bold'>TIME MANAGEMENT</h6>
                        <h3 className='text-5xl font-bold my-3'>Automate scheduling, improve team performance</h3>
                        <p className='text-xl text-justify'>Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. With actionable insights into your team’s scheduling activities and integrations with your team’s favorite tools, you can identify potential process improvements and empower your team to work more efficiently.</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div className="hero h-screen bg-base-100">
                          <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
                            <img src={group} className="w-[650px] rounded-lg" alt='' />
                            <div>
                              <h1 className="text-5xl font-bold">Meeting with</h1>
                              <h1 className="text-5xl font-bold">Your big</h1>
                              <h1 className="text-5xl font-bold">Community</h1>
                              <p className='text-xl text-justify'>Meetings are the lifeblood of high-performing teams</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div>
                        <img src={GroupMeeting} alt="" />
                    </div>
                    <div>
                        <h3 className='text-5xl font-bold my-3'>Enterprise-grade security and management</h3>
                        <p className='text-xl text-justify'>Centralized team management: Manage users, teams, reporting, and shared event types from one centralized admin dashboard.</p>

                        <p className='text-xl text-justify'>Secure and compliant: Securely deploy MyScheduler with SAML SSO and SCIM provisioning. GDPR compliant and SOC 2 Type II certified.</p>

                        <p className='text-xl text-justify'>Complete data privacy: MyScheduler never stores passwords, content, or PII associated with your team’s accounts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Types;