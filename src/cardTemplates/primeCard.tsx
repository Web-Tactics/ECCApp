function getAndformatNumbersFromArray(contacts: any, numberType: string) {
    for (let contact of contacts) {
      if(contact.label === numberType.toLowerCase() || contact.label === numberType.toUpperCase()) {
        let number = contact.number;
        number = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        return number;
    } 
  }

  return 'None'
  }


export function renderPrimeHTML(data: any[]){

    const htmlContent = `<html>
    <head>
      <title>Six Business Cards</title>
    </head>
    <body>
    <div style="width: 802px; height: 874px; position: relative">
    <div style="left: 0px; top: 64px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 109px; display: inline-flex">
      <div style="width: 336px; height: 192px; position: relative">
        <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
        <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
          <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
          <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
            <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
          </div>
        </div>
        <div style="width: 187px; height: 54px; overflow: hidden; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
          data[0]?.firstName === undefined ? '' : data[0].firstName
        } ${
      data[0]?.lastName === undefined ? '' : data[0].lastName
    }</div>
        <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
        <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
        <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: ${
          data[0]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[0].phoneNumbers, 'MOBILE')
        } 
        </div>
        <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: ${
          data[0]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[0].phoneNumbers, 'HOME')
        }</div>
        <div style="left: 15px; top: 155px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Other:  ${
          data[0]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[0].phoneNumbers, 'OTHER')
        }</div>
      </div>
      <div style="width: 336px; height: 192px; position: relative">
        <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
        <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
          <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
          <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
            <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
          </div>
        </div>
        <div style="width: 187px; height: 54px; overflow: hidden; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
          data[1]?.firstName === undefined ? '' : data[1].firstName
        } ${
      data[1]?.lastName === undefined ? '' : data[1].lastName
    }</div>
        <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
        <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
        <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: ${
          data[1]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[1].phoneNumbers, 'MOBILE')
        } 
        </div>
        <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: ${
          data[1]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[1].phoneNumbers, 'HOME')
        }</div>
        <div style="left: 15px; top: 155px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Other:  ${
          data[1]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[1].phoneNumbers, 'OTHER')
        }</div>
      </div>
    </div>
    <div style="left: 0px; top: 365px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 109px; display: inline-flex">
      <div style="width: 336px; height: 192px; position: relative">
        <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
        <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
          <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
          <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
            <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
          </div>
        </div>
        <div style="width: 187px; height: 54px; overflow: hidden; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
          data[2]?.firstName === undefined ? '' : data[2].firstName
        } ${
      data[2]?.lastName === undefined ? '' : data[2].lastName
    }</div>
        <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
        <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
        <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: ${
          data[2]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[2].phoneNumbers, 'MOBILE')
        } 
        </div>
        <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: ${
          data[2]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[2].phoneNumbers, 'HOME')
        }</div>
        <div style="left: 15px; top: 155px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Other:  ${
          data[2]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[2].phoneNumbers, 'OTHER')
        }</div>
      </div>
      <div style="width: 336px; height: 192px; position: relative">
        <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
        <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
          <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
          <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
            <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
          </div>
        </div>
        <div style="width: 187px; height: 54px; overflow: hidden; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
          data[3]?.firstName === undefined ? '' : data[3].firstName
        } ${
      data[3]?.lastName === undefined ? '' : data[3].lastName
    }</div>
        <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
        <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
        <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: ${
          data[3]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[3].phoneNumbers, 'MOBILE')
        } 
        </div>
        <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: ${
          data[3]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[3].phoneNumbers, 'HOME')
        }</div>
        <div style="left: 15px; top: 155px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Other:  ${
          data[3]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[3].phoneNumbers, 'OTHER')
        }</div>
      </div>
    </div>
    <div style="left: 0px; top: 666px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 109px; display: inline-flex">
      <div style="width: 336px; height: 192px; position: relative">
        <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
        <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
          <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
          <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
            <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
          </div>
        </div>
        <div style="width: 187px; height: 54px; overflow: hidden; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
          data[4]?.firstName === undefined ? '' : data[4].firstName
        } ${
      data[4]?.lastName === undefined ? '' : data[4].lastName
    }</div>
        <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
        <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
        <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: ${
          data[4]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[4].phoneNumbers, 'MOBILE')
        } 
        </div>
        <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: ${
          data[4]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[4].phoneNumbers, 'HOME')
        }</div>
        <div style="left: 15px; top: 155px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Other:  ${
          data[4]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[4].phoneNumbers, 'OTHER')
        }</div>
      </div>
      <div style="width: 336px; height: 192px; position: relative">
        <div style="width: 336px; height: 192px; left: 0px; top: 0px; position: absolute; background: white; border: 0.50px black solid"></div>
        <div style="width: 92px; height: 167px; left: 229px; top: 13px; position: absolute">
          <div style="width: 92px; height: 167px; left: 0px; top: 0px; position: absolute; background: #B91E1D"></div>
          <div style="width: 53px; height: 64px; left: 20px; top: 51px; position: absolute">
            <div style="width: 53px; height: 2px; left: 0px; top: 0px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 31px; position: absolute; background: white"></div>
            <div style="width: 53px; height: 2px; left: 0px; top: 62px; position: absolute; background: white"></div>
          </div>
        </div>
        <div style="width: 187px; height: 54px; overflow: hidden; left: 15px; top: 50px; position: absolute; color: #B91E1D; font-size: 24px; font-family: Lexend; font-weight: 400; word-wrap: break-word">${
          data[5]?.firstName === undefined ? '' : data[5].firstName
        } ${
      data[5]?.lastName === undefined ? '' : data[5].lastName
    }</div>
        <div style="width: 122px; height: 1px; left: 15px; top: 26px; position: absolute; background: #B91E1D"></div>
        <div style="width: 140px; left: 15px; top: 13px; position: absolute; color: black; font-size: 8px; font-family: Lato; font-weight: 400; word-wrap: break-word">No mobile emergency contact card</div>
        <div style="left: 15px; top: 107px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Mobile: ${
          data[5]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[5].phoneNumbers, 'MOBILE')
        } 
        </div>
        <div style="left: 15px; top: 131px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Home: ${
          data[5]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[5].phoneNumbers, 'HOME')
        }</div>
        <div style="left: 15px; top: 155px; position: absolute; color: black; font-size: 14px; font-family: Lato; font-weight: 400; word-wrap: break-word">Other:  ${
          data[5]?.phoneNumbers == undefined ? 'None' : getAndformatNumbersFromArray(data[5].phoneNumbers, 'OTHER')
        }</div>
      </div>
    </div>
  </div>
    </body>
    </html>`

return htmlContent
}