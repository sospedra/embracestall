### Install

1. `git clone https://github.com/sospedra/embracestall.git && cd embracestall`
2. `yarn`
3. `npx pod-install`

### How to make it fail?

1. Go to `ios/embracestall/AppDelegate.m:60`
2. Add a valid Embrace key at `[[Embrace sharedInstance] startWithKey:@"" ...]`
3. Build and run
4. Reload the metro packager or activate debug mode

### How to make it work?

1. Go to `ios/embracestall/AppDelegate.m`
2. Remove line 7 and 60
3. Build and run

### How do I know it works/fails?

* Fail &emsp; → Get stuck at `* sad noises *` screen with standard font
* Works &emsp; → Reach `GLORY!` screen with custom font

### How does it look?

| Without Embrace (works) | With Embrace (fails) |
|-----------------|--------------|
| ![no-embrace-no-issues](https://user-images.githubusercontent.com/3116899/92270289-19258700-eee6-11ea-8977-e8268e100114.gif)   |  ![embrace-issues](https://user-images.githubusercontent.com/3116899/92270309-217dc200-eee6-11ea-917e-b76c4d128f8a.gif) |

Contact: rsospedra@bookcameo.com
