import React from 'react';
import membershipData from '../../data/membershipData';
import Popup from 'reactjs-popup';
import membershipModalData from '../../data/membershipModalData';
import MembershipModalCard from './MembershipModalCard';

export default function MembershipSection() {
  return (
    <div className='membership-section'>
      <h3>CHOOSE YOUR MEMBERSHIP</h3>
      <p>ONE MEMBERSHIP ALLOWED AT A TIME</p>
      <div className='membership-info'>
        {
          membershipData.map((m) => (
            <div key={m.id} className='membership-map'>
              <div className='membership-title'>
                <h4>{m.name}</h4>
                <p>{m.bio}</p>
              </div>
              <Popup
                trigger={<button className="button"> LEARN MORE </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    {
                      membershipModalData.map((m2) => {
                        if (m.id === m2.id) {
                          return <MembershipModalCard m2={m2} key={m2.price} />;
                        }
                      })
                    }
                  </div>
                )}
              </Popup>
            </div>

          ))
        }
      </div>
    </div>
  );
}
