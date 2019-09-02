const stationData = {
  "stations" : [
    {
      "name": "name1",
      "id": 'CI.APL',
      "x": -117,
      "y": 35,
      "seismograms": {
      	"east": {
      		"real": [ [0.0000,1.0000],[0.0100,1.0000],[0.0200,0.9998],[0.0300,0.9996],[0.0400,0.9992],[0.0500,0.9988],[0.0600,0.9982],[0.0700,0.9976],[0.0800,0.9968],[0.0900,0.9960],[0.1000,0.9950],[0.1100,0.9940],[0.1200,0.9928],[0.1300,0.9916],[0.1400,0.9902],[0.1500,0.9888],[0.1600,0.9872],[0.1700,0.9856],[0.1800,0.9838],[0.1900,0.9820],[0.2000,0.9801],[0.2100,0.9780],[0.2200,0.9759],[0.2300,0.9737],[0.2400,0.9713],[0.2500,0.9689],[0.2600,0.9664],[0.2700,0.9638],[0.2800,0.9611],[0.2900,0.9582],[0.3000,0.9553],[0.3100,0.9523],[0.3200,0.9492],[0.3300,0.9460],[0.3400,0.9428],[0.3500,0.9394],[0.3600,0.9359],[0.3700,0.9323],[0.3800,0.9287],[0.3900,0.9249],[0.4000,0.9211],[0.4100,0.9171],[0.4200,0.9131],[0.4300,0.9090],[0.4400,0.9048],[0.4500,0.9004],[0.4600,0.8961],[0.4700,0.8916],[0.4800,0.8870],[0.4900,0.8823],[0.5000,0.8776],[0.5100,0.8727],[0.5200,0.8678],[0.5300,0.8628],[0.5400,0.8577],[0.5500,0.8525],[0.5600,0.8473],[0.5700,0.8419],[0.5800,0.8365],[0.5900,0.8309],[0.6000,0.8253],[0.6100,0.8196],[0.6200,0.8139],[0.6300,0.8080],[0.6400,0.8021],[0.6500,0.7961],[0.6600,0.7900],[0.6700,0.7838],[0.6800,0.7776],[0.6900,0.7712],[0.7000,0.7648],[0.7100,0.7584],[0.7200,0.7518],[0.7300,0.7452],[0.7400,0.7385],[0.7500,0.7317],[0.7600,0.7248],[0.7700,0.7179],[0.7800,0.7109],[0.7900,0.7038],[0.8000,0.6967],[0.8100,0.6895],[0.8200,0.6822],[0.8300,0.6749],[0.8400,0.6675],[0.8500,0.6600],[0.8600,0.6524],[0.8700,0.6448],[0.8800,0.6372],[0.8900,0.6294],[0.9000,0.6216],[0.9100,0.6137],[0.9200,0.6058],[0.9300,0.5978],[0.9400,0.5898],[0.9500,0.5817],[0.9600,0.5735],[0.9700,0.5653],[0.9800,0.5570],[0.9900,0.5487],[1.0000,0.5403],[1.0100,0.5319],[1.0200,0.5234],[1.0300,0.5148],[1.0400,0.5062],[1.0500,0.4976],[1.0600,0.4889],[1.0700,0.4801],[1.0800,0.4713],[1.0900,0.4625],[1.1000,0.4536],[1.1100,0.4447],[1.1200,0.4357],[1.1300,0.4267],[1.1400,0.4176],[1.1500,0.4085],[1.1600,0.3993],[1.1700,0.3902],[1.1800,0.3809],[1.1900,0.3717],[1.2000,0.3624],[1.2100,0.3530],[1.2200,0.3436],[1.2300,0.3342],[1.2400,0.3248],[1.2500,0.3153],[1.2600,0.3058],[1.2700,0.2963],[1.2800,0.2867],[1.2900,0.2771],[1.3000,0.2675],[1.3100,0.2579],[1.3200,0.2482],[1.3300,0.2385],[1.3400,0.2288],[1.3500,0.2190],[1.3600,0.2092],[1.3700,0.1994],[1.3800,0.1896],[1.3900,0.1798],[1.4000,0.1700],[1.4100,0.1601],[1.4200,0.1502],[1.4300,0.1403],[1.4400,0.1304],[1.4500,0.1205],[1.4600,0.1106],[1.4700,0.1006],[1.4800,0.0907],[1.4900,0.0807],[1.5000,0.0707],[1.5100,0.0608],[1.5200,0.0508],[1.5300,0.0408],[1.5400,0.0308],[1.5500,0.0208],[1.5600,0.0108],[1.5700,0.0008],[1.5800,-0.0092],[1.5900,-0.0192],[1.6000,-0.0292],[1.6100,-0.0392],[1.6200,-0.0492],[1.6300,-0.0592],[1.6400,-0.0691],[1.6500,-0.0791],[1.6600,-0.0891],[1.6700,-0.0990],[1.6800,-0.1090],[1.6900,-0.1189],[1.7000,-0.1288],[1.7100,-0.1388],[1.7200,-0.1487],[1.7300,-0.1585],[1.7400,-0.1684],[1.7500,-0.1782],[1.7600,-0.1881],[1.7700,-0.1979],[1.7800,-0.2077],[1.7900,-0.2175],[1.8000,-0.2272],[1.8100,-0.2369],[1.8200,-0.2466],[1.8300,-0.2563],[1.8400,-0.2660],[1.8500,-0.2756],[1.8600,-0.2852],[1.8700,-0.2948],[1.8800,-0.3043],[1.8900,-0.3138],[1.9000,-0.3233],[1.9100,-0.3327],[1.9200,-0.3421],[1.9300,-0.3515],[1.9400,-0.3609],[1.9500,-0.3702],[1.9600,-0.3795],[1.9700,-0.3887],[1.9800,-0.3979],[1.9900,-0.4070],[2.0000,-0.4161],[2.0100,-0.4252],[2.0200,-0.4342],[2.0300,-0.4432],[2.0400,-0.4522],[2.0500,-0.4611],[2.0600,-0.4699],[2.0700,-0.4787],[2.0800,-0.4875],[2.0900,-0.4962],[2.1000,-0.5048],[2.1100,-0.5135],[2.1200,-0.5220],[2.1300,-0.5305],[2.1400,-0.5390],[2.1500,-0.5474],[2.1600,-0.5557],[2.1700,-0.5640],[2.1800,-0.5722],[2.1900,-0.5804],[2.2000,-0.5885],[2.2100,-0.5966],[2.2200,-0.6046],[2.2300,-0.6125],[2.2400,-0.6204],[2.2500,-0.6282],[2.2600,-0.6359],[2.2700,-0.6436],[2.2800,-0.6512],[2.2900,-0.6588],[2.3000,-0.6663],[2.3100,-0.6737],[2.3200,-0.6811],[2.3300,-0.6883],[2.3400,-0.6956],[2.3500,-0.7027],[2.3600,-0.7098],[2.3700,-0.7168],[2.3800,-0.7237],[2.3900,-0.7306],[2.4000,-0.7374],[2.4100,-0.7441],[2.4200,-0.7508],[2.4300,-0.7573],[2.4400,-0.7638],[2.4500,-0.7702],[2.4600,-0.7766],[2.4700,-0.7828],[2.4800,-0.7890],[2.4900,-0.7951],[2.5000,-0.8011],[2.5100,-0.8071],[2.5200,-0.8130],[2.5300,-0.8187],[2.5400,-0.8244],[2.5500,-0.8301],[2.5600,-0.8356],[2.5700,-0.8410],[2.5800,-0.8464],[2.5900,-0.8517],[2.6000,-0.8569],[2.6100,-0.8620],[2.6200,-0.8670],[2.6300,-0.8720],[2.6400,-0.8768],[2.6500,-0.8816],[2.6600,-0.8863],[2.6700,-0.8908],[2.6800,-0.8953],[2.6900,-0.8998],[2.7000,-0.9041],[2.7100,-0.9083],[2.7200,-0.9124],[2.7300,-0.9165],[2.7400,-0.9204],[2.7500,-0.9243],[2.7600,-0.9281],[2.7700,-0.9318],[2.7800,-0.9353],[2.7900,-0.9388],[2.8000,-0.9422],[2.8100,-0.9455],[2.8200,-0.9487],[2.8300,-0.9518],[2.8400,-0.9549],[2.8500,-0.9578],[2.8600,-0.9606],[2.8700,-0.9633],[2.8800,-0.9660],[2.8900,-0.9685],[2.9000,-0.9710],[2.9100,-0.9733],[2.9200,-0.9755],[2.9300,-0.9777],[2.9400,-0.9797],[2.9500,-0.9817],[2.9600,-0.9836],[2.9700,-0.9853],[2.9800,-0.9870],[2.9900,-0.9885],[3.0000,-0.9900],[3.0100,-0.9914],[3.0200,-0.9926],[3.0300,-0.9938],[3.0400,-0.9948],[3.0500,-0.9958],[3.0600,-0.9967],[3.0700,-0.9974],[3.0800,-0.9981],[3.0900,-0.9987],[3.1000,-0.9991],[3.1100,-0.9995],[3.1200,-0.9998],[3.1300,-0.9999],[3.1400,-1.0000],[3.1500,-1.0000],[3.1600,-0.9998],[3.1700,-0.9996],[3.1800,-0.9993],[3.1900,-0.9988],[3.2000,-0.9983],[3.2100,-0.9977],[3.2200,-0.9969],[3.2300,-0.9961],[3.2400,-0.9952],[3.2500,-0.9941],[3.2600,-0.9930],[3.2700,-0.9918],[3.2800,-0.9904],[3.2900,-0.9890],[3.3000,-0.9875],[3.3100,-0.9859],[3.3200,-0.9841],[3.3300,-0.9823],[3.3400,-0.9804],[3.3500,-0.9784],[3.3600,-0.9762],[3.3700,-0.9740],[3.3800,-0.9717],[3.3900,-0.9693],[3.4000,-0.9668],[3.4100,-0.9642],[3.4200,-0.9615],[3.4300,-0.9587],[3.4400,-0.9558],[3.4500,-0.9528],[3.4600,-0.9497],[3.4700,-0.9466],[3.4800,-0.9433],[3.4900,-0.9399],[3.5000,-0.9365],[3.5100,-0.9329],[3.5200,-0.9293],[3.5300,-0.9255],[3.5400,-0.9217],[3.5500,-0.9178],[3.5600,-0.9137],[3.5700,-0.9096],[3.5800,-0.9054],[3.5900,-0.9011],[3.6000,-0.8968],[3.6100,-0.8923],[3.6200,-0.8877],[3.6300,-0.8831],[3.6400,-0.8783],[3.6500,-0.8735],[3.6600,-0.8686],[3.6700,-0.8636],[3.6800,-0.8585],[3.6900,-0.8534],[3.7000,-0.8481],[3.7100,-0.8428],[3.7200,-0.8373],[3.7300,-0.8318],[3.7400,-0.8262],[3.7500,-0.8206],[3.7600,-0.8148],[3.7700,-0.8090],[3.7800,-0.8030],[3.7900,-0.7970],[3.8000,-0.7910],[3.8100,-0.7848],[3.8200,-0.7786],[3.8300,-0.7723],[3.8400,-0.7659],[3.8500,-0.7594],[3.8600,-0.7529],[3.8700,-0.7462],[3.8800,-0.7395],[3.8900,-0.7328],[3.9000,-0.7259],[3.9100,-0.7190],[3.9200,-0.7120],[3.9300,-0.7050],[3.9400,-0.6978],[3.9500,-0.6907],[3.9600,-0.6834],[3.9700,-0.6761],[3.9800,-0.6686],[3.9900,-0.6612],[4.0000,-0.6536],[4.0100,-0.6460],[4.0200,-0.6384],[4.0300,-0.6306],[4.0400,-0.6229],[4.0500,-0.6150],[4.0600,-0.6071],[4.0700,-0.5991],[4.0800,-0.5911],[4.0900,-0.5830],[4.1000,-0.5748],[4.1100,-0.5666],[4.1200,-0.5583],[4.1300,-0.5500],[4.1400,-0.5416],[4.1500,-0.5332],[4.1600,-0.5247],[4.1700,-0.5162],[4.1800,-0.5076],[4.1900,-0.4990],[4.2000,-0.4903],[4.2100,-0.4815],[4.2200,-0.4727],[4.2300,-0.4639],[4.2400,-0.4550],[4.2500,-0.4461],[4.2600,-0.4371],[4.2700,-0.4281],[4.2800,-0.4190],[4.2900,-0.4099],[4.3000,-0.4008],[4.3100,-0.3916],[4.3200,-0.3824],[4.3300,-0.3731],[4.3400,-0.3638],[4.3500,-0.3545],[4.3600,-0.3451],[4.3700,-0.3357],[4.3800,-0.3263],[4.3900,-0.3168],[4.4000,-0.3073],[4.4100,-0.2978],[4.4200,-0.2882],[4.4300,-0.2787],[4.4400,-0.2690],[4.4500,-0.2594],[4.4600,-0.2497],[4.4700,-0.2400],[4.4800,-0.2303],[4.4900,-0.2206],[4.5000,-0.2108],[4.5100,-0.2010],[4.5200,-0.1912],[4.5300,-0.1814],[4.5400,-0.1715],[4.5500,-0.1617],[4.5600,-0.1518],[4.5700,-0.1419],[4.5800,-0.1320],[4.5900,-0.1221],[4.6000,-0.1122],[4.6100,-0.1022],[4.6200,-0.0923],[4.6300,-0.0823],[4.6400,-0.0723],[4.6500,-0.0623],[4.6600,-0.0524],[4.6700,-0.0424],[4.6800,-0.0324],[4.6900,-0.0224],[4.7000,-0.0124],[4.7100,-0.0024],[4.7200,0.0076],[4.7300,0.0176],[4.7400,0.0276],[4.7500,0.0376],[4.7600,0.0476],[4.7700,0.0576],[4.7800,0.0676],[4.7900,0.0775],[4.8000,0.0875],[4.8100,0.0975],[4.8200,0.1074],[4.8300,0.1173],[4.8400,0.1273],[4.8500,0.1372],[4.8600,0.1471],[4.8700,0.1570],[4.8800,0.1668],[4.8900,0.1767],[4.9000,0.1865],[4.9100,0.1963],[4.9200,0.2061],[4.9300,0.2159],[4.9400,0.2257],[4.9500,0.2354],[4.9600,0.2451],[4.9700,0.2548],[4.9800,0.2644],[4.9900,0.2741],[5.0000,0.2837],[5.0100,0.2932],[5.0200,0.3028],[5.0300,0.3123],[5.0400,0.3218],[5.0500,0.3312],[5.0600,0.3407],[5.0700,0.3500],[5.0800,0.3594],[5.0900,0.3687],[5.1000,0.3780],[5.1100,0.3872],[5.1200,0.3964],[5.1300,0.4056],[5.1400,0.4147],[5.1500,0.4238],[5.1600,0.4328],[5.1700,0.4418],[5.1800,0.4508],[5.1900,0.4597],[5.2000,0.4685],[5.2100,0.4773],[5.2200,0.4861],[5.2300,0.4948],[5.2400,0.5035],[5.2500,0.5121],[5.2600,0.5206],[5.2700,0.5292],[5.2800,0.5376],[5.2900,0.5460],[5.3000,0.5544],[5.3100,0.5627],[5.3200,0.5709],[5.3300,0.5791],[5.3400,0.5872],[5.3500,0.5953],[5.3600,0.6033],[5.3700,0.6112],[5.3800,0.6191],[5.3900,0.6269],[5.4000,0.6347],[5.4100,0.6424],[5.4200,0.6500],[5.4300,0.6576],[5.4400,0.6651],[5.4500,0.6725],[5.4600,0.6799],[5.4700,0.6872],[5.4800,0.6944],[5.4900,0.7016],[5.5000,0.7087],[5.5100,0.7157],[5.5200,0.7226],[5.5300,0.7295],[5.5400,0.7363],[5.5500,0.7430],[5.5600,0.7497],[5.5700,0.7563],[5.5800,0.7628],[5.5900,0.7692],[5.6000,0.7756],[5.6100,0.7818],[5.6200,0.7880],[5.6300,0.7942],[5.6400,0.8002],[5.6500,0.8061],[5.6600,0.8120],[5.6700,0.8178],[5.6800,0.8235],[5.6900,0.8292],[5.7000,0.8347],[5.7100,0.8402],[5.7200,0.8456],[5.7300,0.8509],[5.7400,0.8561],[5.7500,0.8612],[5.7600,0.8662],[5.7700,0.8712],[5.7800,0.8761],[5.7900,0.8808],[5.8000,0.8855],[5.8100,0.8901],[5.8200,0.8946],[5.8300,0.8991],[5.8400,0.9034],[5.8500,0.9076],[5.8600,0.9118],[5.8700,0.9158],[5.8800,0.9198],[5.8900,0.9237],[5.9000,0.9275],[5.9100,0.9312],[5.9200,0.9348],[5.9300,0.9383],[5.9400,0.9417],[5.9500,0.9450],[5.9600,0.9482],[5.9700,0.9514],[5.9800,0.9544],[5.9900,0.9573],[6.0000,0.9602],[6.0100,0.9629],[6.0200,0.9656],[6.0300,0.9681],[6.0400,0.9706],[6.0500,0.9729],[6.0600,0.9752],[6.0700,0.9774],[6.0800,0.9794],[6.0900,0.9814],[6.1000,0.9833],[6.1100,0.9850],[6.1200,0.9867],[6.1300,0.9883],[6.1400,0.9898],[6.1500,0.9911],[6.1600,0.9924],[6.1700,0.9936],[6.1800,0.9947],[6.1900,0.9957],[6.2000,0.9965],[6.2100,0.9973],[6.2200,0.9980],[6.2300,0.9986],[6.2400,0.9991],[6.2500,0.9994],[6.2600,0.9997],[6.2700,0.9999],[6.2800,1.0000] ],
	      	"sim": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ]
      	},
      	"north": {
      		"real": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ],
	      	"sim": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ]
      	},
      	"z": {
      		"real": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ]
      	}
      }
    },
    {
      "name": "name2",
      "id": 'CI.AVM',
      "x": -117.5,
      "y": 35.5,
      "seismograms": {
      	"east": {
      		"real": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ]
      	},
      	"north": {
      		"real": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ]
      	},
      	"z": {
      		"real": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ],
	      	"sim": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ]
      	}
      }
    },
    {
      "name": "name3",
      "id": 'CI.CCA',
      "x": -118,
      "y": 36,
      "seismograms": {
      	"east": {
      		"real": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ],
	      	"sim": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ]
      	},
      	"north": {
      		"real": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ]
      	},
      	"z": {
      		"real": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ]
      	}
      }
    },
    {
      "name": "name4",
      "id": 'CI.QQQ',
      "x": -118.2,
      "y": 36.8,
      "seismograms": {
      	"east": {
      		"real": [ [0, 0], [10, -.02], [20, -.01], [30, -.03], [40, .2], [50, .5], [60, 0], [70, -.03], [80, .01], [90, -.03], [100, 0] ],
	      	"sim": [ [0, 0], [10, -.4], [20, .02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.21], [80, -.42], [90, 0], [100, .1] ]
      	},
      	"north": {
      		"real": [ [0, 0], [10, -.4], [20, .02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.21], [80, -.42], [90, 0], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.02], [20, -.01], [30, -.03], [40, .2], [50, .5], [60, 0], [70, -.03], [80, .01], [90, -.03], [100, 0] ]
      	},
      	"z": {
      		"real": [ [0, 0], [15, -.01], [25, .02], [35, -.05], [45, .1], [55, 0], [65, 0], [75, -.01], [85, .02], [95, -.05], [100, .1] ],
	      	"sim": [ [0, 0], [5, -.03], [15, .04], [25, -.03], [35, .2], [45, 0], [55, 0], [65, -.03], [75, .04], [85, -.03], [100, 0] ]
      	}
      }
    },
    {
      "name": "name5",
      "id": 'Foo',
      "x": -117.5,
      "y": 37.8,
      "seismograms": {
      	"east": {
      		"real": [ [0, 0], [10, 0.4], [20, -0.3], [30, -0.4], [40, 0.3], [50, -0.3], [60, 0.2], [70, 0.2], [80, 0.3], [90, 0.1], [100, 0.0] ],
	      	"sim": [ [0, 0], [10, 0.2], [20, -0.4], [30, -0.3], [40, 0.5], [50, 0.5], [60, -0.2], [70, -0.5], [80, -0.1], [90, 0.2], [100, -0.4] ]
      	},
      	"north": {
      		"real": [ [0, 0], [10, 0.2], [20, -0.4], [30, -0.3], [40, 0.5], [50, 0.5], [60, -0.2], [70, -0.5], [80, -0.1], [90, 0.2], [100, -0.4] ],
	      	"sim": [ [0, 0], [10, 0.4], [20, -0.3], [30, -0.4], [40, 0.3], [50, -0.3], [60, 0.2], [70, 0.2], [80, 0.3], [90, 0.1], [100, 0.0] ]
      	},
      	"z": {
      		"real": [ [0, 0], [10, 0.4], [20, -0.3], [30, -0.4], [40, 0.3], [50, -0.3], [60, 0.2], [70, 0.2], [80, 0.3], [90, 0.1], [100, 0.0] ],
	      	"sim": [ [0, 0], [10, 0.2], [20, -0.4], [30, -0.3], [40, 0.5], [50, 0.5], [60, -0.2], [70, -0.5], [80, -0.1], [90, 0.2], [100, -0.4] ]
      	}
      }
    },
    {
      "name": "name6",
      "id": 'CI.BAR',
      "x": -117.9,
      "y": 35.6,
      "seismograms": {
      	"east": {
      		"real": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [80, .5], [100, 0] ],
	      	"sim": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ]
      	},
      	"north": {
      		"real": [ [0, 0], [10, -.03], [20, .04], [30, -.03], [40, .2], [50, 0], [60, 0], [70, -.03], [80, .04], [90, -.03], [100, 0] ],
	      	"sim": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ]
      	},
      	"z": {
      		"real": [ [0, 0], [10, -.1], [20, -.02], [30, 0], [40, .1], [50, 0], [60, 0], [70, -.1], [80, -.02], [90, 0], [100, .1] ],
	      	"sim": [ [0, 0], [10, -.01], [20, .02], [30, -.05], [40, .1], [50, 0], [60, 0], [70, -.01], [80, .02], [90, -.05], [100, .1] ]
      	}
      }
    }
  ]
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

window.addEventListener('resize', debounce( function(){ sizeScale(); } ), 250);

let seismogramDataset;
let seismogramDataEast;
let seismogramDataNorth;
let seismogramDataZ;

function getGramDataAtIndex(index) {
	seismogramDataset = stationData.stations[index].seismograms;
	seismogramDataEast = seismogramDataset["east"];
	seismogramDataNorth = seismogramDataset["north"];
	seismogramDataZ = seismogramDataset["z"];
}

getGramDataAtIndex(0);

const stationID = document.querySelector('#stationID');
const vizHolder = document.querySelector('#vizHolder');
const vizStations = document.querySelector('#vizStations');
const vizGramEast = document.querySelector('#vizGramEast');
const vizGramNorth = document.querySelector('#vizGramNorth');
const vizGramZ = document.querySelector('#vizGramZ');
const vizGramXAxis = document.querySelector('#vizGramXAxis');

updateStationID(stationData.stations[0]);

function updateStationID(station) {
	stationID.innerHTML = station.id;
}

const svgStations = d3.select(vizStations)
			.append('svg')
			.attr('tabindex', '0');

const svgGramEast = d3.select(vizGramEast)
			.append('svg');

const svgGramNorth = d3.select(vizGramNorth)
			.append('svg');

const svgGramZ = d3.select(vizGramZ)
			.append('svg');

const svgGramXAxis = d3.select(vizGramXAxis)
			.append('svg');

const svgGramXAxisGroup = svgGramXAxis.append("g")
			.attr("class", "x axis");


let stationXEx;
let stationYEx;
let xDomainPad;
let yDomainPad;
var stationScale = {
	"x" : d3.scaleLinear(),
	"y": d3.scaleLinear()
}
function configStationDomain() {
	// Configure Stations map scale
	let stationXArr = stationData.stations.map(a => a.x).sort(function(a,b){ return a - b});
	stationXEx = d3.extent(stationXArr);

	let stationYArr = stationData.stations.map(a => a.y).sort(function(a,b){ return a - b});
	stationYEx = d3.extent(stationYArr);

	// Find a decent relative data delta to use as scale input padding
		// Keeps points nicely off the axis labels
	xDomainPad = (stationXArr[1] - stationXArr[0]) / 2;
	yDomainPad = (stationYArr[1] - stationYArr[0]) / 2;

	stationScale.x.domain([stationXEx[0] - xDomainPad, stationXEx[1] + xDomainPad]);
	stationScale.y.domain([stationYEx[1] + yDomainPad, stationYEx[0] - yDomainPad]);
}

configStationDomain();
var triSize = 15;
var mapPad = triSize * 2;
var triPoints = '-7.1,5.5 0.4,-7.6 7.8,5.5';

// Init stations map
let numTicks = 2;
let stationsAxisLeft = svgStations.append("g")
			.attr("class", "stations-axis y axis");

let stationsAxisBottom = svgStations.append("g")
			.attr("class", "stations-axis x axis");

var stationPoints = svgStations.selectAll('circle')
		.data(stationData.stations)
		.enter()
		.append('polygon').attr('points', triPoints)
		.attr('tabindex', '0')
		.attr('class', function(d, i) {
			let classes = 'station-point';
			if (i == 0) { classes += ' active'}
			return classes
		})
		.on('click', function(d){
			document.querySelectorAll('.station-point').forEach(function(point){
				if (point.classList.contains('active')) { point.classList.remove('active');}
			});
			this.classList.toggle('active');
			updateGramData(d);
		});

let cellSize = {
		stations: {
			height: null,
			width: null
		},
		gramEast: {
			height: null,
			width: null
		},
		gramNorth: {
			height: null,
			width: null
		},
		gramZ: {
			height: null,
			width: null
		},
		gramXAxis: {
			height: null,
			width: null,
			// Need the initial cell size for axis offset before spaning SVG across grid
			cell: vizGramXAxis.offsetHeight
		}
};

let pathEastReal = svgGramEast.append('path').attr('tabindex', '0');
let pathEastSim = svgGramEast.append('path').attr('tabindex', '0');
let pathNorthReal = svgGramNorth.append('path').attr('tabindex', '0');
let pathNorthSim = svgGramNorth.append('path').attr('tabindex', '0');
let pathZReal = svgGramZ.append('path').attr('tabindex', '0');
let pathZSim = svgGramZ.append('path').attr('tabindex', '0');

let axisEast = svgGramEast.append("g").attr("class", "y axis");
let axisNorth = svgGramNorth.append("g").attr("class", "y axis");
let axisZ = svgGramZ.append("g").attr("class", "y axis");

let gramPaddingSide = 50;
let gramPaddingTop = 10;


// Gram X Axis scale is shared across all grams
let gramScaleX;
function setGramScaleX() {
	// Analyze gram array values for all three seismograms before creating X scale
	let grams = ['east', 'north', 'z'];
	let xValsReal = [];
	let xValsSim = [];
	grams.forEach(function(gram){
		let gramValsReal = seismogramDataset[gram]["real"].map(function(arr){ return arr[0]; });
		let gramValsSim = seismogramDataset[gram]["sim"].map(function(arr){ return arr[0]; });
		Array.prototype.push.apply(xValsReal, gramValsReal);
		Array.prototype.push.apply(xValsSim, gramValsSim);
	});


	let xValsRealEx = d3.extent(xValsReal);
	let xValsSimEx = d3.extent(xValsSim);

	let xMin = d3.min([xValsRealEx[0], xValsSimEx[0]]);
	let xMax = d3.max([xValsRealEx[1], xValsSimEx[1]]);

	return d3.scaleLinear()
					.domain([xMin, xMax])
					.range([gramPaddingSide, cellSize['gramNorth'].width])

}

// Gram Y Axis scale is unique to each gram instance
function setGramScaleY(id) {
	let gramData = seismogramDataset[id];
	let cellName = 'gram' + id.charAt(0).toUpperCase() + id.slice(1);

	let yValsReal = gramData["real"].map(function(arr){ return arr[1]; });
	let yValsSim = gramData["sim"].map(function(arr){ return arr[1]; });
	let yValsRealEx = d3.extent(yValsReal);
	let yValsSimEx = d3.extent(yValsSim);

	let yPad = 1.25;
	let yMin = d3.min([yValsRealEx[0], yValsSimEx[0]]) * yPad;
	let yMax = d3.max([yValsRealEx[1], yValsSimEx[1]]) * yPad;

	return d3.scaleLinear()
					.domain([yMax, yMin])
					.range([gramPaddingTop, (cellSize[cellName].height - gramPaddingTop)])
					.nice()
}

sizeScale();

function generateGramLine(gramScaleY) {
	return d3.line()
				.x(function(d, i) { return gramScaleX(d[0]); })
				.y(function(d) { return gramScaleY(d[1]); })
				.curve(d3.curveCardinal)
}

function updateGramData(station) {
	var i = stationData.stations.findIndex(function(o) {
		return o.id == station.id;
	})
	getGramDataAtIndex(i);
	updateStationID(station);
	plotGrams()
}

function plotGrams(){
	gramScaleX = setGramScaleX();

	let gramEastScale = setGramScaleY('east');
	let gramNorthScale = setGramScaleY('north');
	let gramZScale = setGramScaleY('z');

	let easePath = d3.easeCubicInOut;
	let easeAxis = easePath;
	let durPath = 400;
	let durAxis = durPath;

	// Draw Seismograph East
	pathEastReal.datum(seismogramDataEast["real"])
			.attr('class', 'gram-line gram-line-real')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramEastScale))
	pathEastSim.datum(seismogramDataEast["sim"])
			.attr('class', 'gram-line gram-line-sim')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramEastScale))

	axisEast.attr("transform", "translate(" + gramPaddingSide + ",0)")
		.transition().duration(durAxis).ease(easeAxis)
		.call(
			d3.axisLeft(gramEastScale)
				.ticks(4)
				.tickSize(-(cellSize.gramEast.width - gramPaddingSide))
		);

	// Draw Seismograph North
	pathNorthReal.datum(seismogramDataNorth["real"])
			.attr('class', 'gram-line gram-line-real')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramNorthScale))
	pathNorthSim.datum(seismogramDataNorth["sim"])
			.attr('class', 'gram-line gram-line-sim')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramNorthScale))

	axisNorth.attr("transform", "translate(" + gramPaddingSide + ",0)")
		.transition().duration(durAxis).ease(easeAxis)
		.call(d3.axisLeft(gramNorthScale).ticks(4).tickSize(-(cellSize.gramNorth.width - gramPaddingSide)));


	// Draw Seismograph Z
	pathZReal.datum(seismogramDataZ["real"])
			.attr('class', 'gram-line gram-line-real')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramZScale))
	pathZSim.datum(seismogramDataZ["sim"])
			.attr('class', 'gram-line gram-line-sim')
			.transition().duration(durPath).ease(easePath)
			.attr("d", generateGramLine(gramZScale))

	axisZ.attr("transform", "translate(" + gramPaddingSide + ",0)")
			.transition().duration(durAxis).ease(easeAxis)
			.call(d3.axisLeft(gramZScale).ticks(4).tickSize(-(cellSize.gramZ.width - gramPaddingSide)));


	// Generate one X Axis across all grams
	svgGramXAxisGroup.transition().duration(durAxis).ease(easeAxis)
									.call(d3.axisBottom(gramScaleX)
										.tickSize(-(cellSize.gramXAxis.height - gramPaddingTop * 2)));

									// Trying to address the last tick line overflowing the parent SVG
									// Handling with CSS but would rather keep overflow hidden
									// This doesn't work because it doesn't properly re-evaluate when ticks adjust to a different dataset scale
									// .call(function(){
									// 	let ticks = svgGramXAxisGroup.selectAll('.tick');
									// 	let last = ticks._groups[0][ticks._groups[0].length - 1];
									// 	let offset = -1;
									// 	last.querySelector('line').setAttribute('x1', offset);
									// 	last.querySelector('line').setAttribute('x2', offset);
									// 	last.setAttribute('text-anchor', 'end');
									// });
}

function sizeScale() {
	cellSize.stations.height	= vizStations.offsetHeight;
	cellSize.stations.width		= vizStations.offsetWidth;
	cellSize.gramEast.height	= vizGramEast.offsetHeight;
	cellSize.gramEast.width		= vizGramEast.offsetWidth;
	cellSize.gramNorth.height	= vizGramNorth.offsetHeight;
	cellSize.gramNorth.width	= vizGramNorth.offsetWidth;
	cellSize.gramZ.height			= vizGramZ.offsetHeight;
	cellSize.gramZ.width			= vizGramZ.offsetWidth;
	cellSize.gramXAxis.width	= vizGramXAxis.offsetWidth;

	// Make stations map square
	if (cellSize.stations.height > cellSize.stations.width) {
		cellSize.stations.height = cellSize.stations.width;
	} else if (cellSize.stations.height < cellSize.stations.width) {
		cellSize.stations.width = cellSize.stations.height;
	}

	svgStations.attr('height', cellSize.stations.height)
			.attr('width', cellSize.stations.width);

	svgGramEast.attr('height', cellSize.gramEast.height)
			.attr('width', cellSize.gramEast.width);

	svgGramNorth.attr('height', cellSize.gramNorth.height)
			.attr('width', cellSize.gramNorth.width);

	svgGramZ.attr('height', cellSize.gramZ.height)
			.attr('width', cellSize.gramZ.width);

	// Need the initial cell size for axis offset before spaning SVG across grid
	vizGramXAxis.style.gridRow = "1 / -1";
	cellSize.gramXAxis.height = vizGramXAxis.offsetHeight;
	svgGramXAxis.attr('height', cellSize.gramXAxis.height)
			.attr('width', cellSize.gramXAxis.width)

	stationScale.x.range([mapPad, cellSize.stations.width - mapPad]);
	stationScale.y.range([mapPad, cellSize.stations.height - mapPad]);

	stationsAxisLeft.call(d3.axisLeft(stationScale.y)
				.ticks(numTicks)
				.tickSize(-(cellSize.stations.width)))
			// Remove domain path around axis
			.call(g => g.select(".domain").remove())
			// Manipulate placement of text labels
			.call(g => g.selectAll("text")
				.attr('x', 8)
				.attr('dy', 4)
				.attr('text-anchor', 'start'))
			// Manipulate sizing of axis ticks
			.call(g => g.selectAll("line")
				.attr('x1', 30));


	stationsAxisBottom.attr("transform", "translate(0, " + cellSize.stations.height + ")")
			.call(d3.axisBottom(stationScale.x)
				.ticks(numTicks)
				.tickSize(-cellSize.stations.height))
			// Remove domain path around axis
			.call(g => g.select(".domain").remove())
			// Manipulate placement of text labels
			.call(g => g.selectAll("text")
				.attr('dy', -20)
				.attr('text-anchor', 'middle'))
			// Manipulate sizing of axis ticks
			.call(g => g.selectAll("line")
				.attr('y1', -35))


	stationPoints.attr('transform', function(d) {
									return 'translate(' + stationScale.x(d.x) + ' ' + stationScale.y(d.y) + ')'
								})
								.merge(stationPoints)
	stationPoints.exit().remove();

	svgGramXAxisGroup.attr("transform", "translate(0," + (cellSize.gramXAxis.height - cellSize.gramXAxis.cell) + ")");

	plotGrams();
}