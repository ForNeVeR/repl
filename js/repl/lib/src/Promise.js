import { mapError, mapOk, Result } from "../fable-library.2.3.7/Option.js";
import { declare } from "../fable-library.2.3.7/Types.js";
import { type } from "../fable-library.2.3.7/Reflection.js";
import { iterate } from "../fable-library.2.3.7/Seq.js";
import { equals } from "../fable-library.2.3.7/Util.js";
export function reject(reason) {
  return Promise.reject(reason);
}
export function result(a) {
  return a.then(function ($arg$$1) {
    return new Result(0, "Ok", $arg$$1);
  }, function ($arg$$2) {
    return new Result(1, "Error", $arg$$2);
  });
}
export function mapResult(fn, a$$1) {
  return a$$1.then(function a$$2(result$$1) {
    return mapOk(fn, result$$1);
  });
}
export function bindResult(fn$$1, a$$3) {
  return a$$3.then(function a$$6(a$$4) {
    if (a$$4.tag === 1) {
      const e = a$$4.fields[0];
      return Promise.resolve(new Result(1, "Error", e));
    } else {
      const a$$5 = a$$4.fields[0];
      return result(fn$$1(a$$5));
    }
  });
}
export function mapResultError(fn$$2, a$$7) {
  return a$$7.then(function a$$8(result$$2) {
    return mapError(fn$$2, result$$2);
  });
}
export function tap(fn$$3, a$$9) {
  return a$$9.then(function a$$10(x) {
    fn$$3(x);
    return x;
  });
}
export const PromiseBuilder = declare(function Promise_PromiseBuilder() {});
export function PromiseBuilder$reflection() {
  return type("Promise.PromiseBuilder");
}
export function PromiseBuilder$$$$002Ector() {
  return this instanceof PromiseBuilder ? PromiseBuilder.call(this) : new PromiseBuilder();
}
export function PromiseBuilder$$For$$1565554B(x$$1, seq, body) {
  let p = Promise.resolve(null);
  iterate(function (a$$11) {
    p = p.then(function () {
      return body(a$$11);
    });
  }, seq);
  return p;
}
export function PromiseBuilder$$While$$2044D34(x$$3, guard, p$$1) {
  if (guard()) {
    return p$$1.then(function () {
      return PromiseBuilder$$While$$2044D34(x$$3, guard, p$$1);
    });
  } else {
    return Promise.resolve(null);
  }
}
export function PromiseBuilder$$TryFinally$$7D49A2FD(x$$4, p$$2, compensation) {
  return p$$2.then(function (x$$5) {
    compensation();
    return x$$5;
  }, function (er) {
    compensation();
    throw er;
  });
}
export function PromiseBuilder$$Delay$$62FBFDE1(x$$7, generator) {
  return {
    then(f1, f2) {
      try {
        return generator().then(f1, f2);
      } catch (er$$1) {
        if (equals(f2, null)) {
          return Promise.reject(er$$1);
        } else {
          try {
            return Promise.resolve(f2(er$$1));
          } catch (er$$2) {
            return Promise.reject(er$$2);
          }
        }
      }
    },

    catch(f) {
      try {
        return generator().catch(f);
      } catch (er$$3) {
        try {
          return Promise.resolve(f(er$$3));
        } catch (er$$4) {
          return Promise.reject(er$$4);
        }
      }
    }

  };
}
export function PromiseBuilder$$Run$$212F1D4B(x$$14, p$$3) {
  return new Promise(function (success, fail) {
    try {
      const p$$4 = Promise.resolve(p$$3);
      p$$4.then(success, fail);
    } catch (er$$5) {
      fail(er$$5);
    }
  });
}
export function PromiseBuilder$$Using$$Z7FDC6BE3(x$$16, resource, binder) {
  return PromiseBuilder$$TryFinally$$7D49A2FD(x$$16, binder(resource), function () {
    resource.Dispose();
  });
}